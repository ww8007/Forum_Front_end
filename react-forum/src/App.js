import React from 'react';
import './App.css';
import UserAsync from './UserAsync';
function App() {
  return (
    <>
      <div className="header">
        <div className="logo">시크릿 쥬쥬</div>
        <div className="menu">
          <div className="topMenu">
            <div>
              <a href="">로그인</a>
            </div>
            <div>
              <a href="">회원가입</a>
            </div>
          </div>
          <div className="mainMenu">
            <div>
              <a href="">게시판</a>
            </div>
            <div>
              <a href="">커뮤니티</a>
            </div>
            <div>
              <a href="">Q&A</a>
            </div>
          </div>
        </div>
      </div>
      <body>{/* <UserAsync></UserAsync> */}</body>
    </>
  );
}

export default App;
