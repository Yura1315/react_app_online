/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetCartInfo, GetUserInfo } from '../../../../store/userUnfo/selectors';
import ButtonPrimary from '../../../common/Button/ButtonPrimary';
import style from './CurrentOrder.module.scss';

const CurrentOrder = () => {
  const user = useSelector(GetUserInfo);
  const cart = useSelector(GetCartInfo);
  const result = cart.reduce((sum, current) => {
    if (current.sales > 0) {
      return (
        sum + Math.floor(current.price - (current.sales / 100) * current.price) * current.count
      );
    }
    return sum + current.price * current.count;
  }, 0);
  const count = cart.reduce((sum, current) => sum + current.count, 0);
  // eslint-disable-next-line consistent-return
  const sum = () => {
    if (String(result).length === 3) {
      return result;
    }
    if (String(result).length === 4) {
      return `${String(result).slice(0, 1)} ${String(result).slice(1)}`;
    }
    if (String(result).length === 5) {
      return `${String(result).slice(0, 2)} ${String(result).slice(2)}`;
    }
    if (String(result).length === 6) {
      return `${String(result).slice(0, 3)} ${String(result).slice(3)}`;
    }
  };
  return (
    <div className={style.current_order}>
      <span className={style.current_order_text}>В корзине</span>
      <span className={style.current_order_count}>Кол-во: {count}</span>
      <span className={style.current_order_sum}>
        На сумму: {sum()}
        <svg
          className={style.current_order_svg}
          width="11"
          height="16"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 7H1V0H8.5C11 0 13 2 13 4.5C13 7 11 9 8.5 9H3V11H9V13H3V18H1V13H0V11H1V9H0V7ZM8.5 2H3V7H8.5C9.16304 7 9.79893 6.73661 10.2678 6.26777C10.7366 5.79893 11 5.16304 11 4.5C11 3.83696 10.7366 3.20107 10.2678 2.73223C9.79893 2.26339 9.16304 2 8.5 2Z"
            fill="#706A66"
          />
        </svg>
      </span>
      <div className={style.current_order_bottom}>
        <ButtonPrimary title="ОФОРМИТЬ" />
      </div>
      {user.email ? (
        ''
      ) : (
        <span className={style.auth}>
          <Link to="/logged/auth">Авторизуйтесь</Link>, чтобы воспользоваться ништяками
        </span>
      )}
    </div>
  );
};

export default CurrentOrder;
