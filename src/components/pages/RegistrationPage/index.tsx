/* eslint-disable operator-linebreak */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import Checkbox from '../../common/Checkbox';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';

const RegistrationPage = () => {
  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const passwordRegExp =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError('Должно быть строкой')
      .min(2, 'введите не менее двух символов')
      .required('обязательное поле'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .oneOf([yup.ref('repeatPassword')], 'Пароли не совпадают')
      .required('обязательное поле'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('обязательное поле'),
    email: yup.string().email('некорректное значение').required('обязательное поле'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'введите в формате +79001432425 или 89001432425')
      .required('обязательное поле'),
    checkbox: yup.boolean().oneOf([true], 'подтвердите для продолжения'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        phone: '',
        checkbox: false,
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(JSON.stringify(values));
      }}
      validationSchema={validationSchema}>
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        touched,
        isValid,
        dirty,
        errors,
        setErrors,
      }) => (
        <Form handleSubmit={handleSubmit}>
          <Input
            id="name"
            placeholder="Введите имя"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.name}
            text="имя"
            err={touched.name && errors.name}
          />
          <Input
            text="email"
            id="email"
            placeholder="Введите email"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            err={touched.email && errors.email}
          />
          <Input
            id="phone"
            placeholder="Введите телефон"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.phone}
            text="телефон"
            err={touched.phone && errors.phone}
          />
          <InputPassword
            text="пароль"
            id="password"
            placeholder="********"
            handleBlur={handleBlur}
            value={values.password}
            setValue={handleChange}
            err={touched.password && errors.password}
          />
          <InputPassword
            text="повторите пароль"
            id="repeatPassword"
            placeholder="********"
            handleBlur={handleBlur}
            setValue={handleChange}
            value={values.repeatPassword}
            err={touched.repeatPassword && errors.repeatPassword}
          />
          <Checkbox
            id="checkbox"
            value={values.checkbox}
            setValue={handleChange}
            err={touched.checkbox && errors.checkbox}
          />
          <ButtonPrimary title="ЗАРЕГИСТРИРОВАТЬСЯ" type="submit" disabled={!isValid && !dirty} />
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationPage;
