import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './NotFoundPage.module.scss';
import notFound from '../../../img/404.png';

const NotFaundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={style.notfound_wrap}>
      <div className={style.notfound_container}>
        <div className={style.notfound_left}>
          <p className={style.notfound_title}>Ooops</p>
          <p className={style.notfound_subtitle}>Page not found</p>
          <div className={style.notfound_btn_wrap}>
            <button className={style.notfound_btn} type="button" onClick={goBack}>
              НАЗАД
            </button>
            <Link to="/" className={style.notfound_btn}>
              НА ГЛАВНУЮ
            </Link>
          </div>
        </div>
        <img className={style.notfound_img} src={notFound} alt="not found" />
      </div>
    </div>
  );
};

export default NotFaundPage;
