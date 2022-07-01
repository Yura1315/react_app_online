/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { GetLoadingState } from '../../../store/loader/selectors';
import { getProducts } from '../../../store/productInfo/selector';
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
