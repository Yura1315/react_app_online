import React, { ButtonHTMLAttributes } from 'react';
import style from './ButtonCarousel.module.scss';

type ButtonCarouselPropsType = {
  setPaginate?: any;
};

const ButtonCarousel = ({ setPaginate }: ButtonCarouselPropsType) => (
  <div className={style.carousel_btn_wrap}>
    <button className={style.carousel_btn_left} type="button" onClick={() => setPaginate(-1000)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.1499 6.80001L14.2832 17.6667C12.9999 18.95 12.9999 21.05 14.2832 22.3333L25.1499 33.2"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <button className={style.carousel_btn_right} type="button" onClick={() => setPaginate(1000)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.8501 33.2L25.7168 22.3333C27.0001 21.05 27.0001 18.95 25.7168 17.6667L14.8501 6.79999"
          stroke="#706A66"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

export default ButtonCarousel;
