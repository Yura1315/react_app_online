/* eslint-disable no-underscore-dangle */
import React from 'react';
import { IProduct } from '../../../../../models/IProduct';
import MCardProduct from '../../../../common/MCardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  productsData: IProduct[];
};

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};

const ProductList = ({ productsData }: ProductListType) => (
  <ul className={style.product_list}>
    {productsData.map((el) => (
      <MCardProduct
        variants={listVariants}
        initial="hidden"
        animate="visible"
        id={el.id}
        productId={el._id}
        key={el.id}
        title={el.title}
        price={el.price}
        src={el.src}
        alt={el.alt}
        category={el.category}
        article={el.article}
        descr={el.descr}
        char={el.char}
        bought={el.bought}
        sales={el.sales}
        size="small"
      />
    ))}
  </ul>
);
export default ProductList;
