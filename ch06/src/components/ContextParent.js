import React, { useContext } from 'react'
import ContextChild from './ContextChild';
import CounterContext from '../contexts/CounterContext';

const ContextParent = () => {
  // CounterContext 사용
  const {count, increment, decrement, reset} = useContext(CounterContext);

  return (
    <div className="ContextParent">
      <p>ContextParent count : {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={() => reset(0)}>리셋</button>

      <ContextChild />
    </div>
  );
}

export default ContextParent;