import React from 'react';
import { Link } from 'react-router-dom';
import style from './ToggleNav.module.scss';

type ToggleNavPropsType = {
  visible: boolean;
};

const ToggleNav = ({ visible }: ToggleNavPropsType) => (
  <div className={visible ? `${style.toggle_nav} ${style.active}` : `${style.toggle_nav}`}>
    <ul className={style.toggle_list}>
      <Link to="/" className={style.toggle_item}>
        ГЛАВНАЯ
      </Link>
      <Link to="/about-us" className={style.toggle_item}>
        О НАС
      </Link>
      <Link to="/catalog/all" className={style.toggle_item}>
        КАТАЛОГ
      </Link>
      <Link to="/contacts" className={style.toggle_item}>
        КОНТАКТЫ
      </Link>
    </ul>
  </div>
);

export default ToggleNav;
