import React from 'react';
import CardBasket from './CardBasket';
import style from './CartInfo.module.scss';

const CartInfo = () => (
  <ul className={style.card_list}>
    <CardBasket
      title="Декоративная ваза из керамики"
      alt="ttt"
      price={342}
      article={5534545}
      id={1}
    />
  </ul>
);

export default CartInfo;
