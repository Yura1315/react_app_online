/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlipMove from 'react-flip-move';
import CardProduct from '../../../../common/CardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  productsData: any[];
};

const ProductList = ({ productsData }: ProductListType) => {
  const { category } = useParams();
  const listVariants = {
    visible: () => ({
      opacity: 1,
      transition: { duration: 0.5 },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <ul className={style.product_list}>
      {productsData
        .filter((el) => Object.values(el.category).includes(category))
        .map((el) => (
          <motion.div variants={listVariants} initial="hidden" animate="visible">
            <CardProduct
              id={el.id}
              key={el.id}
              title={el.title}
              price={el.price}
              src={el.src}
              alt={el.alt}
              category={el.category}
            />
          </motion.div>
        ))}
    </ul>
  );
};

export default ProductList;
