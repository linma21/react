import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import root from "./router/root";
/*
  날짜 : 2024/05/08
  이름 : 최이진
  내용 : 리액트 팜스토리 실습

  npm install react-router-dom
  npm install @reduxjs/toolkit react-redux
  npm install axios
  npm install react-cookie
*/
function App() {
  return <RouterProvider router={root} />;
}

export default App;
