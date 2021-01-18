import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';
const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm></LoginForm>
    </AuthTemplate>
  );
};

export default LoginPage;
