/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './ButtonDots.module.scss';

type ButtonDotsPropsType = {
  images?: string[];
  moveImages: (i: number) => void;
  slideIndex: number;
};

const ButtonDots = ({ images, moveImages, slideIndex }: ButtonDotsPropsType) => (
  <ul className={style.slider_dots_list}>
    {images?.map((_el, i) => (
      <li
        onClick={() => moveImages(i + 1)}
        className={
          slideIndex === i + 1 ? `${style.slider_dots_link_active}` : `${style.slider_dots_link}`
        }
        key={i}
      />
    ))}
  </ul>
);

export default ButtonDots;
