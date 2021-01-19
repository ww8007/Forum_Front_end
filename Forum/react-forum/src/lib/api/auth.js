import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입

export const register = ({ username, email, password }) =>
  client.post(
    'http://djangocrudboard-env-2.eba-pncegi8j.ap-northeast-2.elasticbeanstalk.com/register',
    { username, email, password },
  );

export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });


// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');
