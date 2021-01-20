import React from 'react';
import styled from 'styled-components';

const ResposiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto; // 중앙 정렬
  // 브라우저 크기 따라 반응
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Reponsive = ({ children, ...rest }) => {
  //...rest 사용 ResponsiveBlock 전달
  return <ResposiveBlock {...rest}>{children}</ResposiveBlock>;
};

export default Reponsive;
