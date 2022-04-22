import React from 'react';
import style from './OneProductPage.module.scss';

type OneProductPropsType = {
  productInfo:
    | { id: number; title: string; alt: string; price: number; article: number; src: string }
    | undefined;
};

const OneProductPage = ({ productInfo }: OneProductPropsType) => {
  console.log(productInfo);
  return (
    <div className={style.card_more}>
      <div className={style.card_more_img}>
        <ul className={style.card_more_list}>
          <li>
            <img src={productInfo?.src} alt={productInfo?.alt} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OneProductPage;
