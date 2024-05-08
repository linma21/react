import './App.css';
import ContextParent from './components/ContextParent';
import ContextUserList from './components/ContextUserList';
import ReduxParent from './components/ReduxParent';
import UserRegister from './components/UserRegister';
/*
  날짜 : 24/05/03
  이름 : 최이진
  내용 : ch06. 상태 관리
*/
function App() {
  return (
    <div className="App">
        <h3>ch06. 상태 관리</h3>

        <h4>Context API 실습</h4>
        
        <ContextParent />
        <UserRegister />
        <ContextUserList />
        <ReduxParent />


        <h4>Redux(Redux Toolket) 실습</h4>
    </div>
  );
}

export default App;
