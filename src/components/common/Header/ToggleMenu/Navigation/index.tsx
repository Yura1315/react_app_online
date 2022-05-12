import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from '../MenuItem';
import style from './Navigation.module.scss';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [
  { id: 1, title: 'ГЛАВНАЯ', path: '/' },
  { id: 2, title: 'О НАС', path: '/about-us' },
  { id: 3, title: 'КАТАЛОГ', path: '/catalog/all' },
  { id: 4, title: 'КОНТАКТЫ', path: '/contacts' },
];
const Navigation = () => (
  <motion.ul className={style.menu_list} variants={variants}>
    {itemIds.map((el) => (
      <MenuItem key={el.id} itemText={el.title} path={el.path} />
    ))}
  </motion.ul>
);

export default Navigation;
