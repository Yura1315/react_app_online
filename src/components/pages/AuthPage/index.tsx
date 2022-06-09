import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import { SetUserNameAction } from '../../../store/userUnfo/actions';

const AuthPage = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        dispatch(SetUserNameAction(values));
        console.log(values);
      }}>
      {({ handleSubmit, values, handleChange, handleBlur }) => (
        <Form handleSubmit={handleSubmit}>
          <Input
            text="email"
            id="email"
            placeholder="Введите email"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.email}
          />
          <InputPassword
            text="пароль"
            id="password"
            placeholder="Введите пароль"
            handleBlur={handleBlur}
            setValue={handleChange}
            value={values.password}
          />
          <ButtonPrimary title="ВОЙТИ" />
        </Form>
      )}
    </Formik>
  );
};

export default AuthPage;
