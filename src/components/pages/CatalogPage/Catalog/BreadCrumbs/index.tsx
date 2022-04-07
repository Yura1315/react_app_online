import React from 'react';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs = () => (
  <div className={style.catalog}>
    <div className={style.catalog_filter}>
      <ul className={style.catalog_filter_top}>
        <li>
          <a className={style.catalog_filter_item} href="цау">
            Новинки
          </a>
        </li>
        <li>
          <a className={`${style.catalog_filter_item} ${style.sales}`} href="ауца">
            Распродажа
          </a>
        </li>
      </ul>
      <ul className={style.catalog_filter_bottom}>
        <li>
          <a className={style.catalog_filter_item} href="f">
            Гостиная
          </a>
        </li>
        <li>
          <a className={style.catalog_filter_item} href="f">
            Кухня
          </a>
        </li>
        <li>
          <a className={style.catalog_filter_item} href="f">
            Ванная
          </a>
        </li>
        <li>
          <a className={style.catalog_filter_item} href="f">
            Ароматы
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default BreadCrumbs;
