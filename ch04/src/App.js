import logo from './logo.svg';
import './App.css';
import UseStateComponent from './components/UseStateComponent';
import UseRefComponent from './components/UseRefComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UseCallbackComponent from './components/UseCallbackComponent';


/*
  날짜 : 24/05/01
  이름 : 최이진
  내용 : ch04. 리액트 훅(Hook)
*/
function App() {
  return (
    <div className="App">
      <h3>ch04.React Hooks</h3>
      <UseStateComponent />
      <UseRefComponent />
      <UseRefComponent />
      <UseReducerComponent />
      <UseEffectComponent />
      <UseMemoComponent />
      <UseCallbackComponent />
    </div>
  );
}

export default App;
