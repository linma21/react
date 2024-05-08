import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Result1 from './Result1';
import Result2 from './Result2';
import Result3 from './Result3';

const RouterPassingData = () => {

  // 라우터를 프로그래밍으로 지원하는 hook
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ uid: "", name: "", age: 0 });

  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  // 쿼리 스트링
  const btn1Handler = () => {
    const queryString  = `uid=${formData.uid}&name=${formData.name}&age=${formData.age}`;
    navigate(`/sub3/result1?${queryString}`);
  };
  // param
  const btn2Handler = () => {
    const params = `${formData.uid}/${formData.name}/${formData.age}`;
    navigate(`/sub3/result2?${params}`);
  };

  //state
  const btn3Handler = () => {
    navigate('/sub3/result3', {state: {formData}});
  };

  return (
    <div>
      <form>
          <input type='text' name='uid' value={formData.uid} onChange={inputChangeHandler}></input><br />
          <input type='text' name='name' value={formData.name} onChange={inputChangeHandler}></input><br />
          <input type='number' name='age' value={formData.age} onChange={inputChangeHandler}></input><br />
          <input type='button' value='쿼리 스트링 전송' onClick={btn1Handler}></input><br />
          <input type='button' value='주소 파라미터 전송' onClick={btn2Handler}></input><br />
          <input type='button' value='State로 전송' onClick={btn3Handler}></input><br />
        </form>
        <Routes>
          <Route path="/sub3/result1" element={<Result1 />} />
          <Route path="/sub3/result2/:uid/:age" element={<Result2 />} />
          <Route path="/sub3/result3" element={<Result3 />} />
        </Routes>
    </div>
  )
}

export default RouterPassingData