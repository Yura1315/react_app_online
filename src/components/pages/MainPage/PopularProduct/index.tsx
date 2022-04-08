import React from 'react';
import ButtonSecondary from '../../../common/Button/ButtonSecondary';
import { product } from '../../../../helpers/product';
import PopularProductList from './PopularProductList';
import style from './PopularProduct.module.scss';

const PopularProduct = () => (
  <div className={style.popular}>
    <div className={style.container}>
      <h2 className={style.title}>Популярные товары</h2>
      <PopularProductList data={product} />
    </div>
  </div>
);

export default PopularProduct;
