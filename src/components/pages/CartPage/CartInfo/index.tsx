/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartInfo, GetUserInfo, GetWhishList } from '../../../../store/userUnfo/selectors';
import CardBasket from './CardBasket';
import style from './CartInfo.module.scss';

const CartInfo = () => {
  const cart = useSelector(GetCartInfo);
  return (
    <ul className={style.card_list}>
      {cart.map((el) => (
        <CardBasket
          key={el.id}
          title={el.title}
          alt={el.alt}
          price={el.price}
          article={el.article}
          id={el.id}
          img={el.src}
          count={el.count}
          idProduct={el._id}
        />
      ))}
    </ul>
  );
};

export default CartInfo;
