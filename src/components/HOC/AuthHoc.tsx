/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthHoc: React.FC = ({ children }) => {
  const isAuth = false;

  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/auth" />;
};

export default AuthHoc;
