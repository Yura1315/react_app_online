import React from 'react';
import style from './FormSearch.module.scss';

const FormSearch: React.FC = ({ children }) => (
  <form className={style.form} action="#">
    {children}
  </form>
);

export default FormSearch;
