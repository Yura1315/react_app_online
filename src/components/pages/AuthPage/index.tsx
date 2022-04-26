import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';
import ButtonPrimary from '../../common/Button/ButtonPrimary';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    if (password.length > 10) {
      setHasError(false);
      console.log({ emailUser: email, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
  };

  const handler = () => {};

  useEffect(() => {
    if (password.length > 10) {
      setHasError(false);
    } else if (password.length > 0) {
      setHasError(true);
    }
  }, [password]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
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
