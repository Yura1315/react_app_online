import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import PopularProductList from './PopularProductList';
import style from './PopularProduct.module.scss';
import { GetLoadingState } from '../../../../store/loader/selectors';
import Loader from '../../../common/Loader';
import { IProduct } from '../../../../models/IProduct';

type PopularProductPropsType = {
  productsData: IProduct[];
};

const PopularProduct = ({ productsData }: PopularProductPropsType) => {
  const loading = useSelector(GetLoadingState);
  return (
    <div className={style.popular}>
      <motion.div className={style.container}>
        <div className={style.field_top}>
          <h2 className={style.title}>Популярные товары</h2>
        </div>
        {loading ? <Loader /> : ''}
        {!productsData ? <Loader /> : <PopularProductList productsData={productsData} />}
      </motion.div>
    </div>
  );
};

export default PopularProduct;
