/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import MCardProduct from '../../../../common/MCardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  productsData: any[];
};

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};

const ProductList = ({ productsData }: ProductListType) => {
  const { category } = useParams();
  return (
    <ul className={style.product_list}>
      {productsData
        .filter((el) => Object.values(el.category).includes(category))
        .map((el) => (
          <MCardProduct
            variants={listVariants}
            initial="hidden"
            animate="visible"
            id={el.id}
            key={el.id}
            title={el.title}
            price={el.price}
            src={el.src}
            alt={el.alt}
            category={el.category}
          />
        ))}
    </ul>
  );
};

export default ProductList;
