import React, { useReducer } from 'react'

// 초기 상태와 리듀서 함수 정의
const initCountState = {count : 0};

function countReducer(state, action){
  switch(action.type){
    case 'INCREASE' :
      return {count : state.count + 1};
    case 'DECREASE' :
      return {count : state.count - 1};
    case 'RESET' :
      return {count : 0 };
  }
}

// 초기 상태의 리듀서 함수 정의
const initUserState = { name: "", age: 0 };

function userReducer(state, action){
  console.log("action : "+ action);
  console.log("state : "+ state);

  // 불변성을 유지해 이전 상태를 복사하고 새로운 값을 업데이트
  return {...state, [action.name]: action.value};
}
// rafce
const UseReducerComponent = () => {

  const [countState, countDispatch]= useReducer(countReducer, initCountState);
  const [userState, userDispatch] = useReducer(userReducer, initUserState);

  return (
    <div className='UseReducerComponent'>
      <h4>UseReducer Hook 실습</h4>
      <p>count : {countState.count}</p>
      <>
      <button onClick={() => {countDispatch({type : 'INCREASE'})}}>증가</button>
      <button onClick={() => {countDispatch({type : 'DECREASE'})}}>감소</button>
      <button onClick={() => {countDispatch({type : 'RESET'})}}>초기화</button>
      </>

      <p>
        이름 : {userState.name}<br />
        나이 : {userState.age}<br />
      </p>
      <>
      <input type='text' name='name' value={userState.name} onChange={(e)=>{userDispatch(e.target)}}></input><br />
      <input type='text' name='age' value={userState.age} onChange={(e)=>{userDispatch(e.target)}}></input><br />
      </>
      <hr />
    </div>
  )
}

export default UseReducerComponent