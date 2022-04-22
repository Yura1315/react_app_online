/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  // title: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
};

const Input = ({ id, placeholder, value, setValue, type = 'text' }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={style.input_wrap}>
      <input
        className={style.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handler}
        id={id}
      />
      <label className={style.input_label} htmlFor={id}>
        {id}
      </label>
    </div>
  );
};

export default Input;
