/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../common/Button/ButtonPrimary';
import style from './CurrentOrder.module.scss';

const CurrentOrder = () => (
  <div className={style.current_order}>
    <span className={style.current_order_text}>В корзине</span>
    <span className={style.current_order_count}>Кол-во: 3</span>
    <span className={style.current_order_sum}>
      На сумму: 999
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
    <span className={style.auth}>
      <Link to="/logged/auth">Авторизуйтесь</Link>, чтобы воспользоваться ништяками
    </span>
  </div>
);

export default CurrentOrder;
