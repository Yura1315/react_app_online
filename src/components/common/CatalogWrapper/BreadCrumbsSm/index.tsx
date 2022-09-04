/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    if (visible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);
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
        <span className={style.bread_crumbs_title}>
          {category![0].toUpperCase() + category!.slice(1)}
        </span>
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
            <NavLink to="/catalog/all">Все товары</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/catalog/new">Новинки</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/catalog/sales">Распродажа</NavLink>
          </li>
        </ul>
        <ul className={style.category_list}>
          <li className={style.category_link}>
            <NavLink to="/catalog/lounge">Гостиная</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/catalog/kitchen">Кухня</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/catalog/bath">Ванная</NavLink>
          </li>
          <li className={style.category_link}>
            <NavLink to="/catalog/aroma">Ароматы</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbsSm;
