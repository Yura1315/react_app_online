/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './BreadCrumbsSm.module.scss';

type BreadCrumbsSmPropsType = {
  category: string | undefined;
};
const BreadCrumbsSm = ({ category }: BreadCrumbsSmPropsType) => {
  const [visible, setVisible] = useState(false);
  const handlerVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className={style.bread_crumbs_wrap}>
      <div className={style.bread_crumbs}>
        <button className={style.bread_crumbs_btn} type="button" onClick={handlerVisible}>
          11
        </button>
        <span className={style.bread_crumbs_title}>
          {category![0].toUpperCase() + category!.slice(1)}
        </span>
      </div>
      <div
        className={
          visible
            ? `${style.category_wrap} ${style.category_wrap_active}`
            : `${style.category_wrap}`
        }>
        <ul className={style.category_list}>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.catalog_filter_item_active : style.catalog_filter_item
              }
              to="/catalog/all">
              Все товары
            </NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.catalog_filter_item_active : style.catalog_filter_item
              }
              to="/catalog/new">
              Новинки
            </NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${style.catalog_filter_item_active} ${style.sales_active}`
                  : `${style.catalog_filter_item} ${style.sales}`
              }
              to="/catalog/sales">
              Распродажа
            </NavLink>
          </li>
        </ul>
        <ul className={style.category_list}>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.catalog_filter_item_active : style.catalog_filter_item
              }
              to="/catalog/lounge">
              Гостиная
            </NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.catalog_filter_item_active : style.catalog_filter_item
              }
              to="/catalog/kitchen">
              Кухня
            </NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.catalog_filter_item_active : style.catalog_filter_item
              }
              to="/catalog/bath">
              Ванная
            </NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.catalog_filter_item_active : style.catalog_filter_item
              }
              to="/catalog/aroma">
              Ароматы
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbsSm;
