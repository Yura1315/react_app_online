import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import { AuthUserAction } from '../../../store/userUnfo/actions';

const AuthPage = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    email: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        dispatch(AuthUserAction(values));
      }}
      validationSchema={validationSchema}>
      {({ handleSubmit, values, handleChange, handleBlur, touched, isValid, dirty, errors }) => (
        <Form handleSubmit={handleSubmit}>
          <Input
            text="email"
            id="email"
            placeholder="Введите email"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            err={touched.email && errors.email}
          />
          <InputPassword
            text="пароль"
            id="password"
            placeholder="Введите пароль"
            handleBlur={handleBlur}
            setValue={handleChange}
            value={values.password}
            err={touched.password && errors.email}
          />
          <ButtonPrimary title="ВОЙТИ" type="submit" disabled={!isValid && !dirty} />
        </Form>
      )}
    </Formik>
  );
};

export default AuthPage;
