import React, { useEffect, useState } from 'react'

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount...");

    return () => {
      console.log("unmount...");
    };
  }, []);

  return <div>UnmountTest Component</div>;
};

const UseEffectComponent = () => {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);
  const [showUnmountTest, setShowUnmountTest] = useState(false);

  // mount 단계 : 컴포넌트가 브라우저에 출력되는 단계
  useEffect(() => {
    console.log("mount...");

    // unmount 단계 : 컴포넌트가 브라우저에서 제거되는 단계
    return () => {
      console.log("unmount...");
    };
  }, []);

  // update(re-render) 단계
  useEffect(() => {
    console.log("update...");
  });

  // 상태값 name, age가 업데이트 될 때 실행
  useEffect(() => {
    console.log("state name, age update..." + [name] + [age]);
  }, [name, age]);

  return (
    <div className='UseEffectComponent'>
      <h4>UseEffect Hook 실습</h4>
      <p>이름 : {name}</p>
      <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}></input><br />
      <p>나이 : {age}</p>
      <input type='text' value={age} onChange={(e) => {setAge(e.target.value)}}></input><br />
      <p>
        <button onClick={() => setShowUnmountTest(!showUnmountTest)}>UnmountTest</button>
      </p>
      {showUnmountTest && <UnmountTest />}
    </div>
  )
}

export default UseEffectComponent