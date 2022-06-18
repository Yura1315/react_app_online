/* eslint-disable no-shadow */
import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserInfo } from '../../../store/userUnfo/selectors';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import InputPassword from '../../common/Form/InputPassword';
// import { SetUserNameAction } from '../../../store/userUnfo/actions';

type InfoUserType = {
  name: string;
  lastName: string;
  middleName: string;
  email: string;
  birthDay: string;
  phone: string;
  gender: string;
  password: string;
  repeatPassword: string;
};

const ProfileEditPage = () => {
  const infoUser = useSelector(GetUserInfo);
  const dispatch = useDispatch();
  const initialValues: InfoUserType = {
    name: infoUser.name,
    lastName: infoUser.lastName,
    middleName: infoUser.middleName,
    email: infoUser.email,
    birthDay: infoUser.birthDay,
    phone: infoUser.phone,
    gender: infoUser.gender,
    password: '',
    repeatPassword: '',
  };
  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError('Должно быть строкой')
      .min(2, 'введите не менее двух символов')
      .required('обязательное поле'),
    email: yup.string().email('некорректное значение').required('обязательное поле'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'введите в формате +79001432425 или 89001432425')
      .required('обязательное поле'),
    lastName: yup
      .string()
      .typeError('Должно быть строкой')
      .min(2, 'введите не менее двух символов'),
    middlename: yup
      .string()
      .typeError('Должно быть строкой')
      .min(2, 'введите не менее двух символов'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .oneOf([yup.ref('repeatPassword')], 'Пароли не совпадают')
      .required('обязательное поле'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('обязательное поле'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={(values) => {
        const infoUser = {
          name: values.name,
          phone: values.phone,
          email: values.email,
          lastName: values.lastName,
          middleName: values.middleName,
          birthDay: values.birthDay,
          gender: '',
          password: values.password,
          repeatPassword: values.repeatPassword,
        };
        // dispatch(SetUserNameAction(infoUser));
      }}
      validationSchema={validationSchema}>
      {({ handleSubmit, values, handleChange, handleBlur, touched, isValid, dirty, errors }) => (
        <Form handleSubmit={handleSubmit} textClass="edit">
          <Input
            id="name"
            textClass="edit"
            placeholder="Введите имя"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.name}
            text="имя"
            err={touched.name && errors.name}
          />
          <Input
            id="lastName"
            textClass="edit"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.lastName}
            text="фамилия"
            err={touched.lastName && errors.lastName}
          />
          <Input
            id="middleName"
            textClass="edit"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.middleName}
            text="Отчество"
            err={touched.middleName && errors.middleName}
          />
          <Input
            text="email"
            textClass="edit"
            id="email"
            placeholder="Введите email"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            err={touched.email && errors.email}
          />
          <Input
            id="birthDay"
            textClass="edit"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.birthDay}
            text="день рождения"
            err={touched.birthDay && errors.birthDay}
          />
          <Input
            id="phone"
            textClass="edit"
            placeholder="Введите телефон"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.phone}
            text="телефон"
            err={touched.phone && errors.phone}
          />
          <InputPassword
            text="пароль"
            textClass="edit"
            id="password"
            placeholder="********"
            handleBlur={handleBlur}
            setValue={handleChange}
            value={values.password}
            err={touched.password && errors.password}
          />
          <InputPassword
            text="повторите пароль"
            textClass="edit"
            id="repeatPassword"
            placeholder="********"
            handleBlur={handleBlur}
            setValue={handleChange}
            value={values.repeatPassword}
            err={touched.repeatPassword && errors.repeatPassword}
          />
          <ButtonPrimary title="ИЗМЕНИТЬ" type="submit" disabled={!isValid && !dirty} />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditPage;
