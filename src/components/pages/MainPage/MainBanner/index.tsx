import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './MainBanner.module.scss';
import banner from '../../../../img/mainbanner.jpg';

const MainBanner = () => (
  <div className={style.main_banner}>
    <div className={style.main_banner_wrap}>
      <div className={style.main_banner_left}>
        <h1 className={style.main_banner_title}>ДЕКОР И ПОСУДА</h1>
        <span>в стиле минимализм</span>
        <NavLink className={`${style.btn_primary} ${style.main_banner_btn}`} to="/catalog">
          КУПИТЬ СЕЙЧАС
        </NavLink>
      </div>
      <div className={style.main_banner_right}>
        <img className={style.main_banner_img} src={banner} alt="banner" />
      </div>
    </div>
  </div>
);

export default MainBanner;
