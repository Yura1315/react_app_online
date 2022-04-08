import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import ProductList from './ProductList';
import { product } from '../../../../helpers/product';
import style from './Catalog.module.scss';

const Catalog = () => (
  <div className={style.catalog_wrap}>
    <BreadCrumbs />
    <ProductList data={product} />
  </div>
);

export default Catalog;
