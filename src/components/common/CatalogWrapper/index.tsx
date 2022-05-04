import React from 'react';
import { Outlet } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import style from './CatalogWrapper.module.scss';

const CatalogWrapper = () => (
  <div className={style.catalog_wrap}>
    <BreadCrumbs />
    <Outlet />
  </div>
);

export default CatalogWrapper;
