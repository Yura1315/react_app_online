/* eslint-disable import/no-named-default */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { default as Slider, Settings, CustomArrowProps } from 'react-slick';
import { wrap } from '@popmotion/popcorn';
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
  direction: number;
  page: number;
};

const variants = {
  slider: {
    x: 0,
  },
  center: (direction: number) => ({
    x: direction > 0 ? { translateX: 500 } : { translateX: -500 },
  }),
};

const PopularProductList = ({ productsData, direction }: PopularProductListType) => {
  const popularProduct = productsData.sort((a: any, b: any) => b.bought - a.bought).slice(0, 8);
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.scrollWidth);
  }, [width]);
  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.ul
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial="enter"
        custom={direction}
        animate="center"
        // variants={variants}
        exit="exit"
        className={style.popular_product_list}>
        {popularProduct.map((el) => (
          <AnimatePresence initial={false} custom={direction}>
            <MCardProduct
              id={el.id}
              key={el.id!}
              title={el.title}
              price={el.price}
              src={el.src}
              alt={el.alt}
              category={el.category}
            />
          </AnimatePresence>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default PopularProductList;
