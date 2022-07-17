import React from 'react';
import { useSelector } from 'react-redux';
import { GetCartInfo } from '../../../../store/userUnfo/selectors';
import CardBasket from './CardBasket';
import style from './CartInfo.module.scss';

const CartInfo = () => {
  const cart = useSelector(GetCartInfo);
  return (
    <ul className={style.card_list}>
      {cart.map((el) => (
        <CardBasket
          title={el.title}
          alt={el.alt}
          price={el.price}
          article={el.article}
          id={el.id}
          img={el.src}
        />
      ))}
    </ul>
  );
};

export default CartInfo;
