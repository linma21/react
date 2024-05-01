import React, { useRef } from 'react'

// rafce
function UseRefComponent() {
  // ref 생성 : ref는 DOM 요소나 컴포넌트에 대한 참조값
  const refUid = useRef();
  const refName = useRef();

  const btn1Handler = () => {
    const value = refUid.current.value;
    alert(value);
  };
  const btn2Handler = () => {
    const value = refName.current.value;
    alert(value);
  };

  return (
    <div className='UseRefComponent'>
      <h4>UseRef Hook 실습</h4>  
      <p>
        <input type='text' name="uid" ref={refUid}></input>
        <button onClick={btn1Handler}>확인</button>
      </p>
      <p>
        <input type='text' name="name" ref={refName}></input>
        <button onClick={btn2Handler}>확인</button>
      </p>
      <hr />
    </div>
  )
}

export default UseRefComponent