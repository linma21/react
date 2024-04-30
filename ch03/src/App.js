import logo from './logo.svg';
import './App.css';
import { Fragment } from "react";
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import ParentComponent from './components/ParentComponent';
import PropsComponent from './components/PropsComponent';
import { ChildrenComponent } from './components/ChildrenComponent';
import StateComponent from './components/StateComponent';
import RefComponent from './components/RefComponent';
import LifeCycleComponent from './components/LifeCycleComponent';

/*
  날짜 : 24/04/30
  이름 : 최이진
  내용 : ch03. 리액트 컴포넌트

  Component
    - 화면 UI 또는 기능이 독립적으로 나뉜 구조의 모듈
    - 클래스형과 함수형 컴포넌트가 있지만 최신 리액트에서는 함수현만 사용
  
  프로퍼티 
    - 상위 컴포넌트에서 화위 컴포넌트로 전달하는 데이터
    - 은 컴포넌트 싱; 네영ㅇ,ㄹ 짓;ㄱ 컴포넌트러ㅗ 전달할 때 사용하는 특수 props
  
  tkdxo
    - state는 컴폰너트 내부의 데이터
    - 함수형 컴포넌트에서는 useState() Hook 사용
  
  컴포넌트 생명주기
    - 컴포넌트 생명주기는 컴포넌트가 생성되고 화면에 출력된 후 제거되기까지의 링연의 단계
    - 컴포넌트는 mount, update, unmout 단계의 각 생명주기 함수가 호출
    - 컴포넌트 상태값이 업데이트 되면 update 단계의 shouldComponentUpdate, render, componentDidUpdate  발생
  

  */
function App() {
  return (
    <div className="App">
      <h3>ch03. React component</h3>
      <ClassComponent></ClassComponent>
      <FunctionComponent />
      <ParentComponent />
      <PropsComponent subject="props 컴포넌트" message="속성을 갖는 컴포넌트"/>
      <ChildrenComponent>
        <p>ChildrenComponent 내용입니다.</p>
      </ChildrenComponent>
      <StateComponent />
      <RefComponent />
      <LifeCycleComponent />
    </div>
  );
}

export default App;
