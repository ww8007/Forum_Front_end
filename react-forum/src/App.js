import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};
export default App;

// import React from 'react';
// import './App.css';
// import UserAsync from './UserAsync';
// function App() {
//   retu
// //   return (
// //     <>
// //       {/* <div className="header">
// //         <div className="logo">시크릿 쥬쥬</div>
// //         <div className="menu">
// //           <div className="topMenu">
// //             <div>
// //               <a href="">로그인</a>
// //             </div>
// //             <div>
// //               <a href="">회원가입</a>
// //             </div>
// //           </div>
// //           <div className="mainMenu">
// //             <div>
// //               <a href="">게시판</a>
// //             </div>
// //             <div>
// //               <a href="">커뮤니티</a>
// //             </div>
// //             <div>
// //               <a href="">Q&A</a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <body>{/* <UserAsync></UserAsync> */}</body> */}
// //     </>
// //   );
// // }

// export default App;
