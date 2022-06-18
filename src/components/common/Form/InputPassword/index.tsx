/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import style from './InputPassword.module.scss';
import SearchPassButton from './SearchPassButton';

type InputPasswordPropsType = {
  id: string;
  placeholder: string;
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
  text: string;
  handleBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  err?: string | false | string | undefined;
  textClass?: string;
};

const InputPassword = ({
  id,
  placeholder,
  value,
  setValue,
  text,
  handleBlur,
  err,
  textClass,
}: InputPasswordPropsType) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.input_wrap}>
      <input
        type={visible ? 'text' : 'password'}
        className={err ? `${style.input} ${style.input_err}` : `${style.input}`}
        value={value}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={setValue}
        id={id}
      />
      {textClass ? (
        <label
          className={
            err
              ? `${style.input_label_edit} ${style.input_label_err_edit}`
              : `${style.input_label_edit}`
          }
          htmlFor={id}>
          {text}
        </label>
      ) : (
        <label
          className={err ? `${style.input_label} ${style.input_label_err}` : `${style.input_label}`}
          htmlFor={id}>
          {text}
        </label>
      )}
      {err ? <p className={style.err}>{err}</p> : ''}
      <SearchPassButton value={visible} setValue={setVisible} />
    </div>
  );
};

export default InputPassword;
