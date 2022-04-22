import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import ButtonPrimary from '../../common/Button/ButtonPrimary';
import Checkbox from '../../common/Checkbox';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import InputPassword from '../../common/Form/InputPassword';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
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
  console.log('');
  return (
    <Form>
      <Input id="имя" placeholder="Введите имя" setValue={setName} value={name} />
      <Input id="email" placeholder="Введите email" setValue={setEmail} value={email} />
      <Input id="телефон" placeholder="8 (9**) ***-**-**" setValue={setPhone} value={phone} />
      <InputPassword id="пароль" placeholder="********" value={password} setValue={setPassword} />
      <InputPassword
        id="пароль"
        placeholder="********"
        value={repeatPassword}
        setValue={setRepeatPassword}
      />
      <Checkbox />
      <ButtonPrimary title="ЗАРЕГИСТРИРОВАТЬСЯ" />
    </Form>
  );
};

export default RegistrationPage;
