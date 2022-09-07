/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { GetUserInfo } from '../../../store/userUnfo/selectors';
import style from './ProfileWrapper.module.scss';
import ProfileWrapperSm from './ProfileWrapperSm';

const ProfileWrapper = () => {
  const user = useSelector(GetUserInfo);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  const getClientWidth = () => {
    setClientWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', getClientWidth);
    return () => window.removeEventListener('resize', getClientWidth);
  }, [clientWidth]);
  return (
    <div className={style.profile_wrap}>
      <div className={style.container}>
        <div className={style.profile_left}>
          <div className={style.profile_user}>
            {user.name && user.lastName ? user.name[0] + user.lastName[0] : user.name[0]}
          </div>
          {clientWidth <= 886 ? (
            <ProfileWrapperSm />
          ) : (
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
          )}
        </div>
        <div className={style.profile_right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
