import React, { FormEvent, ReactNode } from 'react';
import style from './Form.module.scss';

type FormPropsType = {
  // title: string;
  handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  children?: ReactNode;
  textClass?: string;
};

const Form = ({ children, handleSubmit, textClass }: FormPropsType) => (
  <div className={textClass ? style.form_edit : style.form}>
    <form className={style.form_body} onSubmit={handleSubmit}>
      {children}
    </form>
  </div>
);

export default Form;
