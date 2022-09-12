/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import style from './ProfileWrapperSm.module.scss';

const ProfileWrapperSm = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const handlerVisible = () => {
    setVisible((prev) => !prev);
  };
  useEffect(() => {
    if (visible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);
  const handlerTitle = () => {
    switch (location.pathname.split('/')[2]) {
      case 'info':
        return 'Личная информация';
      case 'edit':
        return 'Редактировать профиль';
      case 'whishlist':
        return 'Избранное';
      case 'bought':
        return 'Мои покупки';
      default:
        return 'Личная информация';
    }
  };
  return (
    <div className={style.bread_crumbs_wrap}>
      <div className={style.bread_crumbs}>
        <button className={style.bread_crumbs_btn} type="button" onClick={handlerVisible}>
          <svg
            className={
              visible
                ? `${style.bread_crumbs_svg} ${style.bread_crumbs_svg_active}`
                : `${style.bread_crumbs_svg}`
            }
            width="15"
            height="15"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 13L1 1M3 13H13V3"
              stroke="#706A66"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className={style.bread_crumbs_title}>{handlerTitle()}</span>
      </div>
      <div
        onClick={() => setVisible(false)}
        className={
          visible
            ? `${style.category_wrap} ${style.category_wrap_active}`
            : `${style.category_wrap}`
        }>
        <ul className={style.category_list}>
          <li className={style.category_link}>
            <NavLink to="/profile/info">Личная информация</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/profile/edit">Редактировать профиль</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/profile/whishlist">Избранное</NavLink>
          </li>
        </ul>
        <ul className={style.category_list}>
          <li className={style.category_link}>
            <NavLink to="/">Мои покупки</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileWrapperSm;
