/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import style from './InputPassword.module.scss';
import SearchPassButton from './SearchPassButton';

type InputPasswordPropsType = {
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputPassword = ({ id, placeholder, value, setValue }: InputPasswordPropsType) => {
  const [visible, setVisible] = useState(false);
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={style.input_wrap}>
      <input
        type={visible ? 'text' : 'password'}
        className={style.input}
        value={value}
        placeholder={placeholder}
        onChange={handler}
        id={id}
      />
      <label className={style.input_label} htmlFor={id}>
        {id}
      </label>
      <SearchPassButton value={visible} setValue={setVisible} />
    </div>
  );
};

export default InputPassword;
