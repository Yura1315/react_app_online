/* eslint-disable react/button-has-type */
import React from 'react';
import style from './ButtonPrimary.module.scss';

type ButtonPrimaryPropsType = {
  title: string;
  onClick?: () => void | undefined | undefined;
  type?: 'submit' | 'button';
  disabled?: boolean;
};

const ButtonPrimary = ({ title, onClick, type, disabled }: ButtonPrimaryPropsType) => (
  <button className={style.btn_primary} type={type} onClick={onClick} disabled={disabled}>
    {title}
  </button>
);

export default ButtonPrimary;
