import React from 'react';
import CardProduct from '../../../../common/CardProduct';
import style from './PopularProductList.module.scss';

type PopularProductListType = {
  data: {
    id: string;
    title: string;
    src: string;
    price: number;
    article: number;
    alt: string;
  }[];
};

const PopularProductList = ({ data }: PopularProductListType) => (
  <ul className={style.popular_product_list}>
    {data.map((el) => (
      <CardProduct id={el.id} title={el.title} price={el.price} src={el.src} alt={el.alt} />
    ))}
  </ul>
);

export default PopularProductList;
