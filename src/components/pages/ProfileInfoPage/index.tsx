/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import { GetUserInfo } from '../../../store/userUnfo/selectors';
import style from './ProfileInfoPage.module.scss';

const ProfilePage = () => {
  const userInfo = useSelector(GetUserInfo);
  return (
    <div>
      <ul className={style.profile_info}>
        <li className={style.profile_user_info}>
          <span>Имя: </span>
          {userInfo ? userInfo.name : ''}
        </li>
        <li className={style.profile_user_info}>
          <span>Фамилия: </span>
          {userInfo ? userInfo.lastName : ''}
        </li>
        <li className={style.profile_user_info}>
          <span>Отчечтво: </span>
          {userInfo ? userInfo.middleName : ''}
        </li>
        <li className={style.profile_user_info}>
          <span>e-mail: </span>
          {userInfo ? userInfo.email : ''}
        </li>
        <li className={style.profile_user_info}>
          <span>Дата рождения: </span>
          {userInfo
            ? `${new Date(userInfo.birthDay).getDate()}.${
                new Date(userInfo.birthDay).getMonth() + 1
              }.${new Date(userInfo.birthDay).getFullYear()}`
            : ''}
        </li>
        <li className={style.profile_user_info}>
          <span>Телефон: </span>
          {userInfo ? userInfo.phone : ''}
        </li>
        <li className={style.profile_user_info}>
          <span>Пол: </span>
          {userInfo ? userInfo.gender : ''}
        </li>
      </ul>
    </div>
  );
};

export default ProfilePage;
