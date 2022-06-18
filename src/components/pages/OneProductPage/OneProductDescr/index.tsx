/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import style from './OneProductDescr.module.scss';

type OneProductDescrPropstype = {
  char: any[];
  descr: string;
};

const OneProductDescr = ({ char, descr }: OneProductDescrPropstype) => {
  const [visible, setVisible] = useState('char');
  return (
    <div className={style.card_more_descr}>
      <div className={style.card_more_descr_wrap}>
        <button
          className={
            visible === 'char'
              ? `${style.card_more_descr_link_active}`
              : `${style.card_more_descr_link}`
          }
          type="button"
          onClick={() => setVisible('char')}>
          Характеристики
        </button>
        <button
          className={
            visible === 'descr'
              ? `${style.card_more_descr_link_active}`
              : `${style.card_more_descr_link}`
          }
          type="button"
          onClick={() => setVisible('descr')}>
          Описание
        </button>
      </div>
      <div className={style.card_more_char}>
        {visible === 'char' ? (
          <motion.ul
            className={style.card_more_char_list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}>
            {char.map((el, i) => (
              <li className={style.card_more_char_item} key={i}>
                <p className={style.card_more_char_item_text}>{`${Object.keys(el)}: `}</p>
                <span>{Object.values(el)}</span>
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            className={style.card_more_descr_one}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}>
            <p className={style.card_more_descr_text}>{descr}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OneProductDescr;
