import React from 'react';
import style from './ButtonSecondary.module.scss';

type ButtonSecondaryPropsType = {
  title: string;
  handler?: (e: React.SyntheticEvent) => void;
};

const ButtonSecondary = ({ title, handler }: ButtonSecondaryPropsType) => (
  <button className={style.btn_secondary} type="button" onClick={handler}>
    {title}
  </button>
);

export default ButtonSecondary;
