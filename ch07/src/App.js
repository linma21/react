import logo from './logo.svg';
import './App.css';
import User1Conponent from './components/user1/User1Conponent';

/*
  날짜 : 24/05/07
  이름 : 최이진
  내용 : ch07. React Http 통신

  Axios 설치
   - npm install axios
*/

function App() {
  return (
    <div className="App">
      <h3>ch07. React Http 통신</h3>
      <User1Conponent />
    </div>
  );
}

export default App;
