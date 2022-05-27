import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PopularProductList from './PopularProductList';
import style from './PopularProduct.module.scss';
import Loader from '../../../common/Loader';
import ButtonCarousel from '../../../common/Button/ButtonCarousel';

type PopularProductPropsType = {
  productsData: any[];
};

const PopularProduct = ({ productsData }: PopularProductPropsType) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  console.log(page);
  return (
    <div className={style.popular}>
      <motion.div className={style.container}>
        <div className={style.field_top}>
          <h2 className={style.title}>Популярные товары</h2>
          <ButtonCarousel setPaginate={paginate} />
        </div>
        {productsData.length ? (
          <PopularProductList productsData={productsData} direction={direction} page={page} />
        ) : (
          <Loader />
        )}
      </motion.div>
    </div>
  );
};

export default PopularProduct;
