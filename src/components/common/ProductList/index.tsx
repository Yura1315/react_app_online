import React from 'react';
import CardProduct from '../CardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  data: {
    id: number;
    title: string;
    src: string;
    price: number;
    article: number;
    alt: string;
  }[];
  type: boolean;
};

const ProductList = ({ data, type }: ProductListType) => (
  <ul className={type ? `${style.popular_product_list}` : `${style.product_list}`}>
    {data.map((el) => (
      <CardProduct id={el.id} title={el.title} price={el.price} src={el.src} alt={el.alt} />
    ))}
  </ul>
);

export default ProductList;
