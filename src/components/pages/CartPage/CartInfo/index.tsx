/* eslint-disable no-underscore-dangle */
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { GetCartInfo } from '../../../../store/userUnfo/selectors';
import MCardBasket from './CardBasket';
import CartEmpty from './CartEmpty';
import style from './CartInfo.module.scss';

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};

const CartInfo = () => {
  const cart = useSelector(GetCartInfo);
  return (
    <AnimatePresence exitBeforeEnter>
      <ul className={style.card_list}>
        {cart.map((el) => (
          <MCardBasket
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={el.id}
            title={el.title}
            alt={el.alt}
            price={el.price}
            article={el.article}
            id={el.id}
            img={el.src}
            count={el.count}
            idProduct={el._id}
            descr={el.descr}
            char={el.char}
            bought={el.bought}
            category={el.category}
          />
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default CartInfo;
