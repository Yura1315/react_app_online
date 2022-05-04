import React from 'react';
import style from './Loader.module.scss';

const Loader = () => (
  <div className={style.lds_grid}>
    <div className={`${style.lds_grid_1} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_2} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_3} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_4} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_5} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_6} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_7} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_8} ${style.lds_grid_div}`} />
    <div className={`${style.lds_grid_9} ${style.lds_grid_div}`} />
  </div>
);

export default Loader;
