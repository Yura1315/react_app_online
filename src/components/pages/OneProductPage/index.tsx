/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductOne } from '../../../store/productInfo/selector';
import { AddCardAction, AddWhishListAction } from '../../../store/userUnfo/actions';
import { GetCartInfo, GetUserInfo } from '../../../store/userUnfo/selectors';
import Button from '../../common/Button';
import ButtonFavorite from '../../common/Button/ButtonFavorite';
import ButtonArrow from './ButtonArrow';
import ButtonDots from './ButtonDots';
import OneProductDescr from './OneProductDescr';
import style from './OneProductPage.module.scss';

const OneProductPage = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector(GetUserInfo);
  const cartInfo = useSelector(GetCartInfo);
  const oneProduct = useSelector(getProductOne);
  const dataSrcLenght = Number(oneProduct.src.length);
  const addCart = () => {
    const isCartProduct = cartInfo.find((el) => el._id === oneProduct._id);
    if (isCartProduct) {
      const newCount = {
        email: user.email,
        cart: { ...oneProduct, count: isCartProduct.count + 1 },
      };
      dispatch(AddCardAction(newCount));
    } else {
      const cartItem = { cart: { ...oneProduct, count: 1 }, email: user.email };
      dispatch(AddCardAction(cartItem));
    }
  };
  const addWhish = () => {
    const productInfo = { productId: oneProduct._id, productNum: id, email: user.email };
    dispatch(AddWhishListAction(productInfo));
  };

  const nextSlide = () => {
    if (slideIndex !== dataSrcLenght) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSrcLenght) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSrcLenght);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className={style.card_more}>
      <div className={style.container}>
        <div className={style.card_more_wrap}>
          <div className={style.card_more_slider}>
            <ButtonArrow moveSlide={nextSlide} direction="next" />
            <ButtonArrow moveSlide={prevSlide} direction="prev" />
            <ul className={style.card_more_list}>
              {oneProduct.src.map((el, i) => (
                <li
                  className={slideIndex === i + 1 ? `${style.slide_active}` : `${style.slide}`}
                  key={i}>
                  <img className={style.card_more_img} src={el} alt="pictures" />
                </li>
              ))}
            </ul>
            <ButtonDots images={oneProduct.src} moveImages={moveDot} slideIndex={slideIndex} />
          </div>
          <div className={style.card_more_info}>
            <h2 className={style.card_more_title}>{oneProduct.title}</h2>
            <div className={style.card_more_price_wrap}>
              {oneProduct.sales > 0 ? (
                <>
                  {' '}
                  <span className={style.card_more_price_sales}>
                    {Math.floor(oneProduct.price - (oneProduct.sales / 100) * oneProduct.price)}
                  </span>
                  <svg
                    className={style.roubles}
                    width="14"
                    height="19"
                    viewBox="0 0 13 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 7H1V0H8.5C11 0 13 2 13 4.5C13 7 11 9 8.5 9H3V11H9V13H3V18H1V13H0V11H1V9H0V7ZM8.5 2H3V7H8.5C9.16304 7 9.79893 6.73661 10.2678 6.26777C10.7366 5.79893 11 5.16304 11 4.5C11 3.83696 10.7366 3.20107 10.2678 2.73223C9.79893 2.26339 9.16304 2 8.5 2Z"
                      fill="#C77958"
                    />
                  </svg>
                  <span className={style.card_more_price_sm}>{oneProduct.price}</span>
                </>
              ) : (
                <>
                  <span className={style.card_more_price}>{oneProduct.price}</span>
                  <svg
                    className={style.roubles}
                    width="14"
                    height="19"
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
            </div>
            <p className={style.card_more_article}>
              Артикул:
              <span>{oneProduct.article}</span>
            </p>
            <OneProductDescr char={oneProduct.char} descr={oneProduct.descr} />
            <div className={style.btn_wrap}>
              <Button title="В КОРЗИНУ" onClick={addCart} />
              {user.name ? <ButtonFavorite addWhish={addWhish} /> : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductPage;
