import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const User1Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    uid : "",
    name : "",
    birth : "",
    hp : "",
    age : 0,
  });

  // input 입력
  const inputChangeHandler = (e) =>{
    e.preventDefault();
    setUser({...user,[e.target.name]: e.target.value});
  }

  // form submit
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/ch09/user1", user).then((response)=>{
      console.log(response.data);

      // 목록 이동
      navigate("/user1/list");

    }).catch((err) => console.log(err));
  };

  return (
    <div className='User1Register'>
      <span>User1 등록</span>
      <form onSubmit={submitHandler}>
        <table border="1">
          <tbody>
            <tr>
                <td>아이디</td>
                <td><input type="text" name="uid" value={user.uid} onChange={inputChangeHandler}/></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" name="name"  value={user.name} onChange={inputChangeHandler}/></td>
            </tr>
            <tr>
                <td>생년월일</td>
                <td><input type="date" name="birth"  value={user.birth} onChange={inputChangeHandler}/></td>
            </tr>
            <tr>
                <td>휴대폰</td>
                <td><input type="text" name="hp"  value={user.hp} onChange={inputChangeHandler}/></td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="number" name="age"  value={user.age} onChange={inputChangeHandler}/></td>
            </tr>
            <tr>
                <td colSpan="2" align="right"><input type="submit" value="등록하기" /></td>
            </tr>
            </tbody>
        </table>
    </form>
    </div>
  )
}

export default User1Register