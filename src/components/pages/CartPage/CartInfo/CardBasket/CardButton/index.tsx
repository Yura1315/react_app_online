import React from 'react';
import style from './CardButton.module.scss';

type CardButtonPropsType = {
  title: string;
  handler?: () => void;
};

const CardButton = ({ title, handler }: CardButtonPropsType) => (
  <button className={style.btn} type="button" onClick={handler}>
    {title}
  </button>
);

export default CardButton;
