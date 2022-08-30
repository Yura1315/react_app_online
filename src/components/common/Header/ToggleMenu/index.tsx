/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import ToggleNav from './ToggleNav';
import style from './ToggleMenu.module.scss';

const ToggleMenu = () => {
  const [visible, setVisible] = useState(false);
  const handler = (e: any) => {
    e.stopPropagation();
    setVisible((prev) => !prev);
  };
  useEffect(() => {
    if (visible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);
  return (
    <div className={style.toggle} onClick={() => setVisible((prev) => !prev)}>
      <button
        className={visible ? `${style.toggle_btn} ${style.active}` : `${style.toggle_btn}`}
        type="button"
        onClick={handler}>
        <span
          className={visible ? `${style.toggle_path} ${style.active}` : `${style.toggle_path}`}
        />
      </button>
      <ToggleNav visible={visible} />
    </div>
  );
};

export default ToggleMenu;
