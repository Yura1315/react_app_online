import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import ProductList from '../../../common/ProductList';
import { product } from '../../../../helpers/product';
import style from './Catalog.module.scss';

const Catalog = () => (
  <div className={style.catalog_wrap}>
    <BreadCrumbs />
    <ProductList data={product} type={false} />
  </div>
);

export default Catalog;
