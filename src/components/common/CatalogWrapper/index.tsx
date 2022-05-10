import React from 'react';
import { Outlet } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import style from './CatalogWrapper.module.scss';

const CatalogWrapper = () => (
  <div className={style.catalog_wrap}>
    <div className={style.container}>
      <BreadCrumbs />
      <Outlet />
    </div>
  </div>
);

export default CatalogWrapper;
