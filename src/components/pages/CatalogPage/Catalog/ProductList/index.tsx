import React from 'react';
import MCardProduct from '../../../../common/MCardProduct';
import style from './ProductList.module.scss';

type ProductListType = {
  productsData: any[];
};

const listVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0 },
};

const ProductList = ({ productsData }: ProductListType) => (
  <div className={style.products_wrap}>
    <ul className={style.product_list}>
      {productsData
        // .filter((el) => Object.values(el.category).includes(category))
        .map((el) => (
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
  </div>
);

export default ProductList;
