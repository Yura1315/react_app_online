import React from 'react';
import style from './ButtonPrimary.module.scss';

type ButtonPrimaryPropsType = {
  title: string;
  onClick?: () => void;
};

const ButtonPrimary = ({ title, onClick }: ButtonPrimaryPropsType) => {
  console.log('');
  return (
    <button className={style.btn_primary} type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonPrimary;
