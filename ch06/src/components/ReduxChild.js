import React, { useContext } from 'react'
import ContextChild from './ContextChild';
import CounterContext from '../contexts/CounterContext';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, reset} from "../slices/CounterSlice";

const ReduxChild = () => {
 
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch(); 

  return (
    <div className="ReduxChild">
      <p>ReduxChild count : {count}</p>
      <button onClick={() => 
        dispatch(increment())}>
        증가</button>
      <button onClick={() => 
        dispatch(decrement())}>
        감소</button>
      <button onClick={() => dispatch(reset(0))}>리셋</button>

      <ContextChild />
    </div>
  );
}

export default ReduxChild;