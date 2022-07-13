import React from 'react';
import style from './CountButton.module.scss';

const CountButton = () => {
  console.log('count-button');
  return (
    <div className={style.count_wrap}>
      <button className={style.count_btn_disable} type="button">
        -
      </button>
      <input className={style.count_input} type="text" maxLength={2} />
      <button className={style.count_btn} type="button">
        +
      </button>
    </div>
  );
};

export default CountButton;
