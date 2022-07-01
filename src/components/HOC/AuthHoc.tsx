/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import makeRequest from '../../network';
import {
  AuthorizationErrorStatus,
  AuthUserAction,
  ClearUserNameAction,
} from '../../store/userUnfo/actions';
import { GetUserInfo, GetUserName } from '../../store/userUnfo/selectors';

const AuthHoc: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const userToken = useSelector(GetUserInfo);
  useEffect(() => {
    const response = async () => {
      const userInfo = await makeRequest({
        url: '/profile',
        method: 'GET',
        headers: { authorization: `Bearer ${userToken.token}` },
      });
      console.log(userInfo);
      if (userInfo === undefined) {
        dispatch(ClearUserNameAction());
      } else {
        dispatch(AuthUserAction(userInfo));
      }
    };
    response();
  }, []);
  if (userToken.token) {
    return <>{children}</>;
  }
  return <Navigate to="/logged/auth" />;
};

export default AuthHoc;
