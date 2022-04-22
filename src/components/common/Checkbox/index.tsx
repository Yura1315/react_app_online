import React from 'react';
import style from './Checkbox.module.scss';

const Checkbox = () => {
  console.log('');
  return (
    <label className={style.checkbox} htmlFor="checkbox">
      <input id="checkbox" className={style.checkbox_input} type="checkbox" />
      <span className={style.checkbox_text}> Согласен (а) на обработку персональных данных</span>
    </label>
  );
};

export default Checkbox;
