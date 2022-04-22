import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import style from './AuthWrapper.module.scss';
import CardLoyal from '../../../img/Card_loyal.jpg';

const AuthWrapper = () => (
  <div className={style.auth_content}>
    <div className={style.card_wrap}>
      <div className={style.form_wrap}>
        <div className={style.auth_wrap}>
          <NavLink
            to="/auth"
            className={({ isActive }) => (isActive ? style.nav_auth_active : style.nav_auth)}>
            Авторизация
          </NavLink>
          <NavLink
            to="/reg"
            className={({ isActive }) => (isActive ? style.nav_auth_active : style.nav_auth)}>
            Регистрация
          </NavLink>
        </div>
        <Outlet />
      </div>
      <div className={style.card_descr}>
        <p className={style.card_descr_item}>
          Оформи карту и получи скидку постоянного клиента 10%
        </p>
        <img className={style.card_descr_img} src={CardLoyal} alt="Карта лояльности" />
      </div>
    </div>
  </div>
);

export default AuthWrapper;
