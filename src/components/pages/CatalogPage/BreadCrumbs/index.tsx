import React from 'react';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs = () => (
  <div className={style.catalog}>
    <div className={style.catalog_wrap}>
      <div className={style.catalog_filter}>
        <ul className={style.catalog_filter_top}>
          <li className={style.catalog_filter_item}>
            <a href="цау">Новинки</a>
          </li>
          <li className={style.catalog_filter_item}>
            <a href="ауца">Распродажа</a>
          </li>
        </ul>
        <ul className={style.catalog_filter_bottom}>
          <li className={style.catalog_filter_item}>
            <a href="f">Гостиная</a>
          </li>
          <li className={style.catalog_filter_item}>
            <a href="f">Кухня</a>
          </li>
          <li className={style.catalog_filter_item}>
            <a href="f">Ванная</a>
          </li>
          <li className={style.catalog_filter_item}>
            <a href="f">Ароматы</a>
          </li>
        </ul>
      </div>
      <div className={style.catalog_item_grid} />
    </div>
  </div>
);

export default BreadCrumbs;
