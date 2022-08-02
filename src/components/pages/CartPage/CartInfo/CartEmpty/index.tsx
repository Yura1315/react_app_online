/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './CartEmpty.module.scss';

const CartEmpty = () => (
  <div>
    <span className={style.cart_text_empty}>в корзине ничего нет...</span>
    <p className={style.cart_text}>
      перейдите в
      <span>
        {' '}
        <Link className={style.cart_text_link} to="/catalog/all">
          каталог
        </Link>{' '}
      </span>
      или воспользуйтесь поиском, если ищете что-то конкретное
    </p>
  </div>
);

export default CartEmpty;
