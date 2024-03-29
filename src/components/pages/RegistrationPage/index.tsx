/* eslint-disable operator-linebreak */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import style from './RegistrationPage.module.scss';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import Checkbox from '../../common/Checkbox';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';
import { RegisrationUserAction } from '../../../store/userUnfo/actions';
import { GetLoadingState } from '../../../store/loader/selectors';
import Loader from '../../common/Loader';
import makeRequest from '../../../network';
import { GetCartInfo } from '../../../store/userUnfo/selectors';
import { IUser } from '../../../models/IUser';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(GetLoadingState);
  const cart = useSelector(GetCartInfo);
  const initialValues: IUser = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
    checkbox: false,
  };
  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const passwordRegExp =
    /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/;
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError('Должно быть строкой')
      .min(2, 'введите не менее двух символов')
      .required('обязательное поле'),
    password: yup
      .string()
      .matches(passwordRegExp, 'Введите корректный пароль')
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
  return loading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={async (values, { setStatus, resetForm }) => {
        const data: IUser = {
          email: values.email,
          password: values.password,
          phone: values.phone,
          name: values.name,
          cart: [...cart],
        };

        try {
          const response = await makeRequest({
            method: 'POST',
            url: 'http://84.38.183.129:5000/logged/reg',
            // url: 'http://localhost:5000/logged/reg',
            data,
          });
          if (response.statusCode === 400) {
            setStatus({ email: response.payload.message });
          } else {
            dispatch(RegisrationUserAction(response));
            resetForm();
          }
        } catch (err) {
          console.log(err);
        }
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
        status,
      }) => (
        <Form handleSubmit={handleSubmit}>
          <Input
            id="name"
            placeholder="Введите имя"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.name!}
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
          {(touched.email && errors.email && <p className={style.err}>{errors.email}</p>) ||
            (!!status && <p className={style.err}>{status.email}</p>)}
          <Input
            id="phone"
            placeholder="Введите телефон"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.phone!}
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
            value={values.repeatPassword!}
            err={touched.repeatPassword && errors.repeatPassword}
          />
          <Checkbox
            id="checkbox"
            value={values.checkbox!}
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
