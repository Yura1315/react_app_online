import React from 'react';
import CardProduct from '../../../../common/CardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  data: {
    id: string;
    title: string;
    src: string;
    price: number;
    article: number;
    alt: string;
  }[];
};

const ProductList = ({ data }: ProductListType) => (
  <ul className={style.product_list}>
    {data.map((el) => (
      <CardProduct id={el.id} title={el.title} price={el.price} src={el.src} alt={el.alt} />
    ))}
  </ul>
);

export default ProductList;
