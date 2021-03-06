/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder?: string;
  value: string;
  setValue?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  text?: string;
  handleBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  err?: string | false | undefined | any;
  textClass?: string;
  type?: string;
};

const Input = ({
  id,
  placeholder,
  value,
  setValue,
  text,
  handleBlur,
  err,
  textClass,
  type,
}: InputPropsType) => (
  <div className={style.input_wrap}>
    <input
      className={err ? `${style.input} ${style.input_err}` : `${style.input}`}
      type={type || 'text'}
      value={value}
      placeholder={placeholder}
      onChange={setValue}
      onBlur={handleBlur}
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
  </div>
);
export default Input;
