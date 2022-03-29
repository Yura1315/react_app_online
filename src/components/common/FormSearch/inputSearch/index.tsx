import React from 'react';
import style from './InputSearch.module.scss';

type InputSearchPropsType = {
  placeholder?: string;
  value?: string;
  type: 'text' | 'image';
};

const InputSearch = ({ placeholder, value, type }: InputSearchPropsType) => (
  <input className={style.form_item} type={type} placeholder={placeholder} value={value} />
);

export default InputSearch;
