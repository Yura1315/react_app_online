/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../../../../common/CardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  productsData: any[];
};

const ProductList = ({ productsData }: ProductListType) => {
  const { category } = useParams();
  return (
    <ul className={style.product_list}>
      {productsData
        .filter((el) => Object.values(el.category).includes(category))
        .map((el) => (
          <CardProduct
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
