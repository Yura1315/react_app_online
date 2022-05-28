/* eslint-disable import/no-named-default */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MCardProduct from '../../../../common/MCardProduct';
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
    bought: number;
  }[];
};

const PopularProductList = ({ productsData }: PopularProductListType) => {
  const popularProduct = productsData.sort((a: any, b: any) => b.bought - a.bought).slice(0, 8);
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);
  return (
    <motion.ul
      ref={carousel}
      drag="x"
      dragConstraints={{ right: 0, left: -width }}
      className={style.popular_product_list}>
      {popularProduct.map((el) => (
        <MCardProduct
          id={el.id}
          key={el.id!}
          title={el.title}
          price={el.price}
          src={el.src}
          alt={el.alt}
          category={el.category}
        />
      ))}
    </motion.ul>
  );
};

export default PopularProductList;
