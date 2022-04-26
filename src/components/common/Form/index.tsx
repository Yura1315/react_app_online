import React, { FormEvent, ReactNode } from 'react';
import style from './Form.module.scss';

type FormPropsType = {
  // title: string;
  handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  children?: ReactNode;
};

const Form = ({ children, handleSubmit }: FormPropsType) => (
  <div className={style.form}>
    <form className={style.form__body} onSubmit={handleSubmit}>
      {children}
    </form>
  </div>
);

export default Form;
