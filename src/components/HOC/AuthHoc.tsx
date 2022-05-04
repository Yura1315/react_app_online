/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { GetUserName } from '../../store/userUnfo/selectors';

const AuthHoc: React.FC = ({ children }) => {
  const isAuth = useSelector(GetUserName);

  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/logged/auth" />;
};

export default AuthHoc;
