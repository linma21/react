import React from 'react'
import { useLocation } from 'react-router-dom';

const Result3 = () => {
   // State 수신 처리하기 위한 useLocation hook : 현재 경로 정보를 갖고있음
    const location = useLocation();

        // location.state에서 formData 객체 가져오기
        const formData = location.state.formData;

        // formData에서 데이터 추출
        const { uid, name, age } = formData;
  return (
    <div className='Result3'>
      <span>Result3</span>
      <p>
        아이디 : {uid}<br />
        이름 : {name}<br />
        나이 : {age}<br />
      </p>
    </div>
  )
}

export default Result3