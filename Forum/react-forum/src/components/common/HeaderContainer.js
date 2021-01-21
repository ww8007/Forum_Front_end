import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  // 객체 형식 선언
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <Header user={user}></Header>;
};

export default HeaderContainer;
