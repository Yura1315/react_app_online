import React from 'react';
import { motion } from 'framer-motion';
import PopularProductList from './PopularProductList';
import style from './PopularProduct.module.scss';
import Loader from '../../../common/Loader';

type PopularProductPropsType = {
  productsData: any[];
};

const PopularProduct = ({ productsData }: PopularProductPropsType) => (
  <div className={style.popular}>
    <motion.div className={style.container}>
      <div className={style.field_top}>
        <h2 className={style.title}>Популярные товары</h2>
      </div>
      {productsData.length ? <PopularProductList productsData={productsData} /> : <Loader />}
    </motion.div>
  </div>
);

export default PopularProduct;
