import React from 'react';
import style from './ButtonArrow.module.scss';

type ButtonArrowPropsType = {
  moveSlide: () => void;
  direction: string;
};

const ButtonArrow = ({ moveSlide, direction }: ButtonArrowPropsType) => (
  <div className={style.slider_arrow_wrap}>
    <div
      className={
        direction === 'next'
          ? `${style.slider_arrow_right_wrap}`
          : `${style.slider_arrow_left_wrap}`
      }>
      <button
        className={
          direction === 'next' ? `${style.slider_arrow_right}` : `${style.slider_arrow_left}`
        }
        type="button"
        onClick={moveSlide}>
        {direction === 'prev' ? (
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
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8501 33.2L25.7168 22.3333C27.0001 21.05 27.0001 18.95 25.7168 17.6667L14.8501 6.79999"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  </div>
);

export default ButtonArrow;
