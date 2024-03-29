/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-named-default */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MCardProduct from '../../../../common/MCardProduct';
import style from './PopularProductList.module.scss';
import ButtonCarousel from '../../../../common/Button/ButtonCarousel';
import { IProduct } from '../../../../../models/IProduct';

type PopularProductListType = {
  productsData: IProduct[];
};

const PopularProductList = ({ productsData }: PopularProductListType) => {
  const [width, setWidth] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const carousel = useRef<HTMLUListElement>(null);
  const paginate = (newDirection: number) => {
    setPage(newDirection);
  };
  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  });
  // Настройки анимации
  const variants = {
    enter: (direction: number) => ({
      x: 0,
    }),
    center: (direction: number) => ({
      x: direction === 0 ? 0 : -width,
    }),
    exit: (direction: number) => ({
      x: 0,
    }),
  };
  return (
    <div className={style.slider_wrap}>
      <ButtonCarousel page={page} setPaginate={paginate} width={width} />
      <motion.ul
        variants={variants}
        custom={page}
        initial="enter"
        animate="center"
        transition={{
          x: { type: 'spring', stiffness: 120, damping: 30 },
          opacity: { duration: 1.1 },
        }}
        ref={carousel}
        drag="x"
        exit="exit"
        dragConstraints={{ right: 0, left: -width }}
        className={style.popular_product_list}>
        {productsData.map((el) => (
          <MCardProduct
            id={el.id}
            key={el.id}
            title={el.title}
            price={el.price}
            src={el.src}
            alt={el.alt}
            category={el.category}
            bought={el.bought}
            char={el.char}
            descr={el.descr}
            productId={el._id}
            article={el.article}
            sales={el.sales}
            size="large"
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default PopularProductList;
