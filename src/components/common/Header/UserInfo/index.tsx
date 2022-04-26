import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './UserInfo.module.scss';

const UserInfo = () => (
  <div className={style.account}>
    <p className={style.account_user}>Войти</p>
    <svg
      className={style.account_svg}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 5V19H5V5H19ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 12C10.35 12 9 10.65 9 9C9 7.35 10.35 6 12 6C13.65 6 15 7.35 15 9C15 10.65 13.65 12 12 12ZM12 8C11.45 8 11 8.45 11 9C11 9.55 11.45 10 12 10C12.55 10 13 9.55 13 9C13 8.45 12.55 8 12 8ZM18 18H6V16.47C6 13.97 9.97 12.89 12 12.89C14.03 12.89 18 13.97 18 16.47V18ZM8.31 16H15.69C15 15.44 13.31 14.88 12 14.88C10.69 14.88 8.99 15.44 8.31 16Z" />
    </svg>
    <ul className={style.account_login}>
      <Link to="auth" className={style.account_link}>
        Авторизация
      </Link>
      <Link to="reg" className={style.account_link}>
        Регистрация
      </Link>
    </ul>
  </div>
);

export default UserInfo;
