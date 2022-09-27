/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import React, { forwardRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSecondary from '../Button/ButtonSecondary';
import style from './MCardProduct.module.scss';
import { GetCartInfo, GetUserInfo } from '../../../store/userUnfo/selectors';
import { AddCardAction } from '../../../store/userUnfo/actions';

type CardProductType = {
  id: number;
  productId: string;
  title: string;
  src: string[];
  category: string[];
  price: number;
  article: number;
  bought: number;
  alt: string;
  sales: number;
  char: any[];
  descr: string;
  size?: string;
};

const CardProduct = forwardRef(
  (
    {
      id,
      title,
      src,
      price,
      alt,
      category,
      productId,
      article,
      bought,
      char,
      descr,
      sales,
      size,
    }: CardProductType,
    ref: any
  ) => {
    const dispatch = useDispatch();
    const cart = useSelector(GetCartInfo);
    const user = useSelector(GetUserInfo);
    const handler = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const newCount = {
        cart: {
          id,
          title,
          src,
          price,
          alt,
          category,
          _id: productId,
          article,
          bought,
          char,
          descr,
          sales,
        },
      };
      const isCartProduct = cart.find((el: any) => el._id === productId);
      if (isCartProduct) {
        const newProductCount = {
          cart: { ...newCount.cart, count: isCartProduct.count + 1 },
          email: user.email,
        };
        dispatch(AddCardAction(newProductCount));
      } else {
        const cartItem = { cart: { ...newCount.cart, count: 1 }, email: user.email };
        dispatch(AddCardAction(cartItem));
      }
    };
    return (
      <Link
        className={size !== 'small' ? style.product_item : style.product_small_item}
        to={`/product/${id}`}
        ref={ref}>
        <img
          className={size !== 'small' ? style.product_item_img : style.product_small_item_img}
          src={src[0]}
          alt={alt}
        />
        <h2 className={size !== 'small' ? style.product_title : style.product_small_title}>
          {title}
        </h2>
        <p
          className={
            size !== 'small'
              ? `${style.product_item_price_wrap}`
              : `${style.product_small_item_price_wrap}`
          }>
          {sales > 0 ? (
            <>
              <span
                className={
                  size !== 'small' ? style.product_price_sales : style.product_small_price_sales
                }>
                {Math.floor(price - (sales / 100) * price)}
              </span>
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 7H1V0H8.5C11 0 13 2 13 4.5C13 7 11 9 8.5 9H3V11H9V13H3V18H1V13H0V11H1V9H0V7ZM8.5 2H3V7H8.5C9.16304 7 9.79893 6.73661 10.2678 6.26777C10.7366 5.79893 11 5.16304 11 4.5C11 3.83696 10.7366 3.20107 10.2678 2.73223C9.79893 2.26339 9.16304 2 8.5 2Z"
                  fill="#C77958"
                />
              </svg>
              <span
                className={
                  size !== 'small' ? style.product_price_sm : style.product_small_price_sm
                }>
                {price}
              </span>
            </>
          ) : (
            <>
              <span className={size !== 'small' ? style.product_price : style.product_small_price}>
                {price}
              </span>
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 7H1V0H8.5C11 0 13 2 13 4.5C13 7 11 9 8.5 9H3V11H9V13H3V18H1V13H0V11H1V9H0V7ZM8.5 2H3V7H8.5C9.16304 7 9.79893 6.73661 10.2678 6.26777C10.7366 5.79893 11 5.16304 11 4.5C11 3.83696 10.7366 3.20107 10.2678 2.73223C9.79893 2.26339 9.16304 2 8.5 2Z"
                  fill="#706A66"
                />
              </svg>
            </>
          )}
        </p>
        <div className={size !== 'small' ? style.product_btn : style.product_small_btn}>
          <ButtonSecondary title="ПОДРОБНЕЕ" />
          <ButtonSecondary title="В КОРЗИНУ" handler={handler} />
        </div>
      </Link>
    );
  }
);

const MCardProduct = motion(CardProduct);

export default MCardProduct;
