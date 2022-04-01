import React from 'react';
import style from './ButtonSecondary.module.scss';

type ButtonSecondaryPropsType = {
  title: string;
  onClick?: () => void;
};

const ButtonSecondary = ({ title, onClick }: ButtonSecondaryPropsType) => (
  <button className={style.btn_secondary} type="button" onClick={onClick}>
    {title}
  </button>
);

export default ButtonSecondary;
