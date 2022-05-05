import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ButtonSecondary from '../Button/ButtonSecondary';
import style from './CardProduct.module.scss';

type CardProductType = {
  id: number;
  title: string;
  src: [string];
  price: number;
  alt: string;
  key: number;
  category: [string];
};

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 3 },
  },
  hidden: { opacity: 0 },
};

const CardProduct = ({ id, title, src, price, alt, key, category }: CardProductType) => (
  <Link className={style.product_item} key={key} to={`/product/${id}`}>
    <img className={style.product_item_img} src={src[0]} alt={alt} />
    <h2 className={style.product_title}>{title}</h2>
    <p className={style.product_item_price_wrap}>
      <span className={style.product_price}>{price}</span>
      <svg
        width="13"
        height="18"
        viewBox="0 0 13 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 7H1V0H8.5C11 0 13 2 13 4.5C13 7 11 9 8.5 9H3V11H9V13H3V18H1V13H0V11H1V9H0V7ZM8.5 2H3V7H8.5C9.16304 7 9.79893 6.73661 10.2678 6.26777C10.7366 5.79893 11 5.16304 11 4.5C11 3.83696 10.7366 3.20107 10.2678 2.73223C9.79893 2.26339 9.16304 2 8.5 2Z"
          fill="#706A66"
        />
      </svg>
    </p>
    <div className={style.product_btn}>
      <ButtonSecondary title="ПОДРОБНЕЕ" />
      <ButtonSecondary title="В КОРЗИНУ" />
    </div>
  </Link>
);

export default CardProduct;
