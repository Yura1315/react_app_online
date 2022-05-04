import React from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs = () => (
  <div className={style.catalog}>
    <div className={style.catalog_filter}>
      <ul className={style.catalog_filter_top}>
        <li>
          <NavLink className={style.catalog_filter_item} to="all">
            Все товары
          </NavLink>
        </li>
        <li>
          <Link className={style.catalog_filter_item} to="new">
            Новинки
          </Link>
        </li>
        <li>
          <NavLink className={`${style.catalog_filter_item} ${style.sales}`} to="sales">
            Распродажа
          </NavLink>
        </li>
      </ul>
      <ul className={style.catalog_filter_bottom}>
        <li>
          <NavLink className={style.catalog_filter_item} to="lounge">
            Гостиная
          </NavLink>
        </li>
        <li>
          <NavLink className={style.catalog_filter_item} to="kitchen">
            Кухня
          </NavLink>
        </li>
        <li>
          <NavLink className={style.catalog_filter_item} to="f">
            Ванная
          </NavLink>
        </li>
        <li>
          <NavLink className={style.catalog_filter_item} to="aroma">
            Ароматы
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default BreadCrumbs;
