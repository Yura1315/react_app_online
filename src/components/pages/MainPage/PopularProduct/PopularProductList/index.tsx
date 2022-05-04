import React from 'react';
import CardProduct from '../../../../common/CardProduct';
import style from './PopularProductList.module.scss';

type PopularProductListType = {
  productsData: {
    id: number;
    title: string;
    src: [string];
    price: number;
    article: number;
    alt: string;
    category: [string];
  }[];
};

const PopularProductList = ({ productsData }: PopularProductListType) => {
  const compareNumber = (a: number, b: number) => a - b;
  return (
    <ul className={style.popular_product_list}>
      {productsData.map((el) => (
        <CardProduct
          id={el.id}
          key={el.id!}
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

export default PopularProductList;
