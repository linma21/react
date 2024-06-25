import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/main/MainPage"
import HelloPage from "../pages/introduction/HelloPage"
import DirectionPage from "../pages/introduction/DirectionPage"
import ListPage from "../pages/market/ListPage"
import StoryPage from "../pages/croptalk/StoryPage"
import GrowPage from "../pages/croptalk/GrowPage"
import SchoolPage from "../pages/croptalk/SchoolPage"
import InfoPage from "../pages/event/InfoPage"
import NoticePage from "../pages/community/NoticePage"
import LoginPage from "../pages/user/LoginPage"
import TermsPage from "../pages/user/TermsPage"
import RegisterPage from "../pages/user/RegisterPage"
import AdminMainPage from "../pages/admin/MainPage"
import AdminRegisterPage from "../pages/admin/product/RegisterPage"
import BoardListPage from "../pages/board/ListPage"
import BoardWritePage from "../pages/board/WritePage"
import BoardModifyPage from "../pages/board/ModifyPage"
import BoardViewPage from "../pages/board/ViewPage"

const root = createBrowserRouter([
  { path: "/", element: <MainPage />},
  { path: "/introduction/hello", element: <HelloPage />},
  { path: "/introduction/direction", element: <DirectionPage />},
  { path: "/market/list", element: <ListPage />},
  { path: "/croptalk/story", element: <StoryPage />},
  { path: "/croptalk/grow", element: <GrowPage />},
  { path: "/croptalk/school", element: <SchoolPage />},
  { path: "/event/info", element: <InfoPage />},
  { path: "/community/notice", element: <NoticePage />},
  // user
  { path: "/user/login", element: <LoginPage />},
  { path: "/user/terms", element: <TermsPage />},
  { path: "/user/register", element: <RegisterPage />},
  { path: "/user/logout", element: null},

  // board
  { path: "/board/list", element: <BoardListPage />},
  { path: "/board/view", element: <BoardViewPage />},
  { path: "/board/modify", element: <BoardModifyPage />},
  { path: "/board/write", element: <BoardWritePage />},
  { path: "/admin", element: <AdminMainPage />},
  { path: "/admin/product/register", element: <AdminRegisterPage />},
]);


// 라우터 내보내기
export default root;