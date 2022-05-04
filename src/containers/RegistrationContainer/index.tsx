import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../../components/pages/RegistrationPage';
import { GetUserName } from '../../store/userUnfo/selectors';

const RegistrationContainer = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name]);
  return <RegistrationPage />;
};

export default RegistrationContainer;
