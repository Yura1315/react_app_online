import React from 'react';
import style from './Form.module.scss';

// type FormPropsType = {
//   title: string;
// };

const Form: React.FC = ({ children }) => (
  <div className={style.form}>
    <form className={style.form__body}>{children}</form>
  </div>
);

export default Form;
