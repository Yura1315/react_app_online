import React from 'react';
import { useSelector } from 'react-redux';
import CartInfo from './CartInfo';
import CurrentOrder from './CurrentOrder';
import style from './CartPage.module.scss';
import { GetLoadingState } from '../../../store/loader/selectors';
import Loader from '../../common/Loader';
import { GetCartInfo } from '../../../store/userUnfo/selectors';
import CartEmpty from './CartInfo/CartEmpty';

const CartPage = () => {
  const loading = useSelector(GetLoadingState);
  const cart = useSelector(GetCartInfo);
  return (
    <div className={style.cart}>
      {cart.length ? (
        <div className={style.cart_wrap}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <CartInfo />
              <CurrentOrder />
            </>
          )}
        </div>
      ) : (
        <div className={style.cart_wrap}>
          <CartEmpty />
        </div>
      )}
    </div>
  );
};

export default CartPage;
