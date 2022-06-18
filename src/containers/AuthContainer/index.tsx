import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { GetUserName } from '../../store/userUnfo/selectors';

const AuthContainer = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name]);
  return <AuthPage />;
};

export default AuthContainer;
