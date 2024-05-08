import { createBrowserRouter } from "react-router-dom";
import Hello from "../components/sub1/Hello";

// 사용자 정의 라우터 생성
const root =createBrowserRouter([
  {path: "/", element:<Hello />},
  {path: "/hello", element:< Hello />},
  {path: "/welcome", element:<Hello />},
  {path: "/greeting", element:<Hello />}
]);

// 라우터 내보내기
export default root;