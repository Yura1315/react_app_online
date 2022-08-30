import React from 'react';
import { motion } from 'framer-motion';
import PopularProductList from './PopularProductList';
import style from './PopularProduct.module.scss';

type PopularProductPropsType = {
  productsData: [
    {
      id: number;
      _id: string;
      title: string;
      src: [string];
      category: [string];
      price: number;
      article: number;
      bought: number;
      alt: string;
      char: any[];
      descr: string;
      sales: number;
    }
  ];
};

const PopularProduct = ({ productsData }: PopularProductPropsType) => (
  <div className={style.popular}>
    <motion.div className={style.container}>
      <div className={style.field_top}>
        <h2 className={style.title}>Популярные товары</h2>
      </div>
      <PopularProductList productsData={productsData} />
    </motion.div>
  </div>
);

export default PopularProduct;
