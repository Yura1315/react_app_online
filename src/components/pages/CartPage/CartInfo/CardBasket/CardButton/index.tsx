import React from 'react';
import style from './CardButton.module.scss';

type CardButtonPropsType = {
  title: string;
  handler?: () => void;
};

const CardButton = ({ title }: CardButtonPropsType) => {
  console.log('fef');
  return (
    <button className={style.btn} type="button">
      {title}
    </button>
  );
};

export default CardButton;