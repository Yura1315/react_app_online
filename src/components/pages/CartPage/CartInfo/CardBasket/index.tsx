/* eslint-disable react/jsx-one-expression-per-line */
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../../../models/IProduct';
import { AddWhishListAction, DelCardAction } from '../../../../../store/userUnfo/actions';
import { GetUserInfo, GetWhishList } from '../../../../../store/userUnfo/selectors';
import style from './CardBasket.module.scss';
import CardButton from './CardButton';
import CountButton from './CountButton';

const CardBasket = forwardRef(
  (
    {
      img,
      alt,
      title,
      price,
      article,
      id,
      count,
      productId,
      descr,
      char,
      bought,
      category,
      sales,
    }: IProduct,
    ref: any
  ) => {
    const dispatch = useDispatch();
    const user = useSelector(GetUserInfo);
    const whishList = useSelector(GetWhishList);
    const delProduct = () => {
      const cartItem = {
        email: user.email,
        product: {
          _id: productId,
          id,
          title,
          src: img,
          alt,
          descr,
          char,
          bought,
          category,
          count,
          article,
          price,
        },
      };
      dispatch(DelCardAction(cartItem));
    };
    const addWhish = () => {
      const productInfo = { productId, productNum: id, email: user.email };
      dispatch(AddWhishListAction(productInfo));
    };
    const allreadyWhish = whishList.find((el) => el === productId);
    return (
      <motion.li className={style.card} ref={ref}>
        <div className={style.card_img}>
          <img src={img} alt={alt} />
        </div>
        <div className={style.card_middle}>
          <Link to={`/product/${id}`} className={style.card_title}>
            {title}
          </Link>
          <span className={style.card_article}>Артикул: {article}</span>
          <CountButton count={count!} idProduct={productId} />
        </div>
        <div className={style.card_right}>
          {sales > 0 ? (
            <div className={style.card_price}>
              <span className={style.card_price_sales}>
                {Math.floor(price - (sales / 100) * price)}
              </span>
              <svg
                className={style.card_svg}
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
              <span className={style.card_price_sm}>{price}</span>
            </div>
          ) : (
            <div className={style.card_price}>
              <span className={style.card_price}>{price}</span>
              <svg
                className={style.card_svg}
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
            </div>
          )}
          <div className={style.card_button_wrap}>
            {user.email ? (
              <CardButton
                title={allreadyWhish ? 'В избранном' : 'В избранное'}
                handler={addWhish}
              />
            ) : (
              ''
            )}
            <CardButton title="Удалить" handler={delProduct} />
          </div>
        </div>
      </motion.li>
    );
  }
);

const MCardBasket = motion(CardBasket);

export default MCardBasket;
