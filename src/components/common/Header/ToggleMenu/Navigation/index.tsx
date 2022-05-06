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
  { title: 'О НАС', path: '/about-us' },
  { title: 'КАТАЛОГ', path: '/catalog/all' },
  { title: 'КОНТАКТЫ', path: '/contacts' },
];
const Navigation = () => (
  <motion.ul className={style.menu_list} variants={variants}>
    {itemIds.map((el) => (
      <MenuItem key={el.title} itemText={el.title} path={el.path} />
    ))}
  </motion.ul>
);

export default Navigation;
