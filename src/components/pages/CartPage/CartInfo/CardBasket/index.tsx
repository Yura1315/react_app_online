/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import style from './CardBasket.module.scss';
import CardButton from './CardButton';
import CountButton from './CountButton';

type CardBasketPropsType = {
  id: number;
  img?: string;
  alt: string;
  title: string;
  price: number;
  article: number;
};

const CardBasket = ({ img, alt, title, price, article, id }: CardBasketPropsType) => {
  console.log('cardBasket');
  return (
    <li className={style.card}>
      <div className={style.card_img}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.card_middle}>
        <h3 className={style.card_title}>{title}</h3>
        <span className={style.card_article}>Артикул: {article}</span>
        <CountButton />
      </div>
      <div className={style.card_right}>
        <span className={style.card_price}>
          {price}
          <svg
            className={style.card_svg}
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
        </span>
        <div>
          <CardButton title="Добавить в избранное" />
          <CardButton title="Удалить" />
        </div>
      </div>
    </li>
  );
};

export default CardBasket;
