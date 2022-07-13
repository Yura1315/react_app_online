import React from 'react';
import CartInfo from './CartInfo';
import CurrentOrder from './CurrentOrder';
import style from './CartPage.module.scss';

const CartPage = () => {
  console.log('cart-page');

  return (
    <div className={style.cart}>
      <div className={style.cart_wrap}>
        <CartInfo />
        <CurrentOrder />
      </div>
    </div>
  );
};

export default CartPage;
