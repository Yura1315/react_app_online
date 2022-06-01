/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './ProfileWrapper.module.scss';

const ProfileWrapper = () => (
  <div className={style.profile_wrap}>
    <div className={style.container}>
      <div className={style.profile_left}>
        <div className={style.profile_user}>ЮЩ</div>
        <div className={style.profile_links}>
          <NavLink
            to="info"
            className={({ isActive }) =>
              isActive ? style.profile_link_active : style.profile_link
            }>
            Личная информация
          </NavLink>
          <NavLink
            to="edit"
            className={({ isActive }) =>
              isActive ? style.profile_link_active : style.profile_link
            }>
            Редактировать профиль
          </NavLink>
          <NavLink
            to="whishlist"
            className={({ isActive }) =>
              isActive ? style.profile_link_active : style.profile_link
            }>
            Избранное
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.profile_link_active : style.profile_link
            }>
            Мои покупки
          </NavLink>
        </div>
      </div>
      <div className={style.profile_right}>
        <Outlet />
      </div>
    </div>
  </div>
);

export default ProfileWrapper;
