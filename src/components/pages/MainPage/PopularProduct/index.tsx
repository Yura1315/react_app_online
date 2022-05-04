import React from 'react';
import PopularProductList from './PopularProductList';
import style from './PopularProduct.module.scss';
import Loader from '../../../common/Loader';

type PopularProductPropsType = {
  productsData: any[];
};

const PopularProduct = ({ productsData }: PopularProductPropsType) => (
  <div className={style.popular}>
    <div className={style.container}>
      <h2 className={style.title}>Популярные товары</h2>
      {productsData.length ? <PopularProductList productsData={productsData} /> : <Loader />}
    </div>
  </div>
);

export default PopularProduct;
