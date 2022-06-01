import React from 'react';
import { useSelector } from 'react-redux';
import { GetWhishList } from '../../../store/userUnfo/selectors';
import MCardProduct from '../../common/MCardProduct';
import style from './FavoritePage.module.scss';

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};

const FavoritePage = () => {
  const whishList = useSelector(GetWhishList);
  //   const product = useSelector();
  return (
    <ul className={style.whish_list}>
      {whishList.map((el: any) => (
        <MCardProduct
          variants={listVariants}
          initial="hidden"
          animate="visible"
          id={el.id}
          key={el.id}
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

export default FavoritePage;
