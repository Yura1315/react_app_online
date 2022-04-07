import React from 'react';
import ButtonSecondary from '../../../common/Button/ButtonSecondary';
import { product } from '../../../../helpers/product';
import ProductList from '../../../common/ProductList';
import style from './PopularProduct.module.scss';

const PopularProduct = () => (
  <div className={style.popular}>
    <div className={style.container}>
      <h2 className={style.title}>Популярные товары</h2>
      <ProductList data={product} type={style.container} />
    </div>
  </div>
);

export default PopularProduct;
