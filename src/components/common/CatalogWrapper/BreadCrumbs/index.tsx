/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import BreadCrumbsSm from '../BreadCrumbsSm';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const [clientWidth, setClientWidth] = useState(0);
  const { category } = useParams();
  useEffect(() => {
    window.addEventListener('resize', () => {
      setClientWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setClientWidth(window.innerWidth);
      });
  }, [clientWidth]);
  return (
    <div className={style.catalog}>
      {clientWidth < 727 ? (
        <BreadCrumbsSm category={category} />
      ) : (
        <div className={style.catalog_filter}>
          <ul className={style.catalog_filter_top}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.catalog_filter_item_active : style.catalog_filter_item
                }
                to="all">
                Все товары
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.catalog_filter_item_active : style.catalog_filter_item
                }
                to="new">
                Новинки
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${style.catalog_filter_item_active} ${style.sales_active}`
                    : `${style.catalog_filter_item} ${style.sales}`
                }
                to="sales">
                Распродажа
              </NavLink>
            </li>
          </ul>
          <ul className={style.catalog_filter_bottom}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.catalog_filter_item_active : style.catalog_filter_item
                }
                to="lounge">
                Гостиная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.catalog_filter_item_active : style.catalog_filter_item
                }
                to="kitchen">
                Кухня
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.catalog_filter_item_active : style.catalog_filter_item
                }
                to="bath">
                Ванная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.catalog_filter_item_active : style.catalog_filter_item
                }
                to="aroma">
                Ароматы
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BreadCrumbs;
