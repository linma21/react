import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, BrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react';
import Hello from './components/sub1/Hello';
import RouterPassingData from './components/sub3/RouterPassingData';
import root from './router/root';
/*
  날짜 : 24/05/02
  이름 : 최이진
  내용 : ch05. 리액트 라우터

  react-router 설치
    - npm install react-router-dom
*/
function App() {
  
  return (
    <Router>
      <div className="App">
        <h3>react</h3>

        <h4>react router</h4>
        <p>
          <Link to="/sub1/hello">hello</Link>
          <Link to="/sub1/greeting">greeting</Link>
          <Link to="/sub1/welcome">welcome</Link>
        </p>
        <Routes>
          <Route path="/sub1/hello" element={<Hello />} />
          <Route path="/sub1/greeting" element={<greeting />} />
          <Route path="/sub1/welcome" element={<welcome />} />
        </Routes>

        <h4>중첩 라우터 Outlet</h4>
        <p>
          <Link to="/sub2/parent">parent</Link>
          <Link to="/sub2/parent/child1">child1</Link>
          <Link to="/sub2/parent/child2">child2</Link>
        </p>
        <Routes>
          <Route path="/sub2/parent" element={<parent />}>
            <Route path="/sub2/parent/child1" element={<child1 />} />
            <Route path="/sub2/parent/child2" element={<child2 />} />
          </Route>
        </Routes>

        <h4>라우터 데이터 전송</h4>
        <BrowserRouter>
          <RouterPassingData />
        </BrowserRouter>

        <h4>사용자 정의 라우터</h4>
        <RouterProvider router={root}></RouterProvider>
      </div>
    </Router>
  );
}

export default App;
