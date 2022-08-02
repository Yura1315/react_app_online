import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { GetCartInfo } from '../../../../store/userUnfo/selectors';
import style from './BasketInfo.module.scss';

const BasketInfo = () => {
  const cart = useSelector(GetCartInfo);
  const countProducts = cart.reduce((sum, el) => sum + el.count, 0);
  return (
    <NavLink className={style.basket} to="cart">
      {cart.length ? (
        <div className={style.count_cart}>
          <p className={style.count_cart_text}>{countProducts}</p>
        </div>
      ) : (
        ''
      )}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8V9H22V11H20.833L20.076 20.083C20.0552 20.3329 19.9413 20.5658 19.7568 20.7357C19.5723 20.9055 19.3308 20.9999 19.08 21H4.92C4.66925 20.9999 4.4277 20.9055 4.24322 20.7357C4.05875 20.5658 3.94481 20.3329 3.924 20.083L3.166 11H2V9H6V8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM18.826 11H5.173L5.84 19H18.159L18.826 11ZM13 13V17H11V13H13ZM9 13V17H7V13H9ZM17 13V17H15V13H17ZM12 4C10.9738 4 9.98677 4.39444 9.24319 5.10172C8.4996 5.80901 8.05631 6.77504 8.005 7.8L8 8V9H16V8C16 6.97376 15.6056 5.98677 14.8983 5.24319C14.191 4.4996 13.225 4.05631 12.2 4.005L12 4Z" />
      </svg>
    </NavLink>
  );
};

export default BasketInfo;
