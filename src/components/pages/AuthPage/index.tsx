import React, { useEffect, useState } from 'react';
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
    <Form>
      <Input id="email" placeholder="Введите email" setValue={setEmail} value={email} />
      <InputPassword id="пароль" placeholder="********" value={password} setValue={setPassword} />
      <ButtonPrimary title="ВОЙТИ" />
    </Form>
  );
};

export default AuthPage;
