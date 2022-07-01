/* eslint-disable no-shadow */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import BirthDay from '../../common/Form/BirthDayInput';
import { GetUserInfo } from '../../../store/userUnfo/selectors';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import InputPassword from '../../common/Form/InputPassword';
import 'react-datepicker/dist/react-datepicker.css';
import makeRequest from '../../../network';
import { RegisrationUserAction } from '../../../store/userUnfo/actions';

type InfoUserType = {
  name: string;
  lastName: string;
  middleName: string;
  email: string;
  birthDay: any;
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
    lastName: '' || infoUser.lastName,
    middleName: '' || infoUser.middleName,
    email: infoUser.email,
    phone: infoUser.phone,
    gender: infoUser.gender,
    password: '',
    repeatPassword: '',
    birthDay: infoUser.birthDay ? new Date(infoUser.birthDay) : null,
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
      onSubmit={async (values) => {
        const { repeatPassword, ...data } = values;
        const response = await makeRequest({
          url: '/profile/edit',
          method: 'PUT',
          data,
          headers: { authorization: `Bearer ${infoUser.token}` },
        });
        dispatch(RegisrationUserAction(response));
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
        setFieldValue,
      }) => (
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
            placeholder="Введите фамилию"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.lastName}
            text="фамилия"
            err={touched.lastName && errors.lastName}
          />
          <Input
            id="middleName"
            placeholder="Введите отчество"
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
          <BirthDay
            id="birthDay"
            name="birthday"
            value={values.birthDay}
            selected={values.birthDay}
            setValue={setFieldValue}
            dateFormat="dd.MM.yyyy"
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
