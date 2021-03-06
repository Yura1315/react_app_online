/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo';
import BasketInfo from './BasketInfo';
import style from './Header.module.scss';
import logo from '../../../img/logo.svg';
import FormSearch from '../FormSearch';
import InputSearch from '../FormSearch/inputSearch';
import ToggleMenu from './ToggleMenu';

const Header = () => (
  <header className={style.header}>
    <div className={style.header_menu}>
      {/* <ToggleMenu /> */}
      <NavLink className={style.logo} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav className={style.mainmenu}>
        <ul className={style.mainmenu_list}>
          <li className={style.mainmenu_item}>
            <NavLink to="/about-us">О НАС</NavLink>
          </li>
          <li className={style.mainmenu_item}>
            <NavLink to="/catalog/all">КАТАЛОГ</NavLink>
          </li>
          <li className={style.mainmenu_item}>
            <NavLink to="/contacts">КОНТАКТЫ</NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.header_personal}>
        <FormSearch>
          <InputSearch type="text" placeholder="Поиск..." />
        </FormSearch>
        <UserInfo />
        <BasketInfo />
      </div>
    </div>
  </header>
);

export default Header;
