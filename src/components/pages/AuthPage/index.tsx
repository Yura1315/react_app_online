/* eslint-disable operator-linebreak */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import { AuthUserAction } from '../../../store/userUnfo/actions';
import { GetLoadingState } from '../../../store/loader/selectors';
import Loader from '../../common/Loader';
import makeRequest from '../../../network';
import style from './AuthPage.module.scss';
import { GetCartInfo } from '../../../store/userUnfo/selectors';

type AuthFormValues = {
  email: string;
  password: string;
};

const AuthPage = () => {
  const initialValues: AuthFormValues = {
    email: '',
    password: '',
  };
  const loading = useSelector(GetLoadingState);
  const dispatch = useDispatch();
  const cartInfo = useSelector(GetCartInfo);
  const validationSchema = yup.object({
    email: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
  });
  return loading ? (
    <Loader />
  ) : (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={async (values, { setStatus }) => {
        const data = { cartInfo, ...values };
        try {
          const response = await makeRequest({
            method: 'POST',
            url: 'http://188.68.223.141:5000/logged/auth',
            data,
          });
          if (response.statusCode === 400) {
            if (response.payload.message === 'Не удалось найти пользователя') {
              setStatus({ email: response.payload.message });
            } else {
              setStatus({ password: response.payload.message });
            }
          } else {
            dispatch(AuthUserAction(response));
          }
        } catch (error) {
          console.log(error);
          setStatus({ servErr: 'Что-то пошло не так, попробуйте позднее' });
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
            text="email"
            id="email"
            placeholder="Введите email"
            setValue={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            // err={touched.email && errors.email}
          />
          {(touched.email && !!errors.email && <p className={style.err}>{errors.email}</p>) ||
            (!!status && <p className={style.err}>{status.email}</p>)}
          <InputPassword
            text="пароль"
            id="password"
            placeholder="Введите пароль"
            handleBlur={handleBlur}
            setValue={handleChange}
            value={values.password}
            // err={touched.password && errors.password}
          />
          {(touched.password && !!errors.password && (
            <p className={style.err_pass}>{errors.password}</p>
          )) ||
            (!!status && <p className={style.err_pass}>{status.password}</p>)}
          <ButtonPrimary title="ВОЙТИ" type="submit" disabled={!isValid && !dirty} />
        </Form>
      )}
    </Formik>
  );
};

export default AuthPage;
