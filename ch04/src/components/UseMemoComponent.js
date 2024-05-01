import React, { useMemo, useState } from 'react'

const heavyCalc = (num) => {
  console.log('heavyCalc ...');
  for(let i =1; i < 100000; i++){}
  return num + 10000;
};
const lightCalc = (num) => {
  console.log('lightCalc ...');
  return num + 1;
};

const UseMemoComponent = () => {

  const [heavyNum, setHeavyNum] = useState(1);
  const [lightNum, setLightNum] = useState(1);

  const heavyResult = useMemo(()=>{
    return heavyCalc(heavyNum);
  }, [heavyNum]);
  const lightResult = lightCalc(lightNum);

  return (
    <div className='UseMemo'>
      <h4>UseMemo Hook 실습</h4>
      <p>heavyResult : {heavyResult} </p>
      <p>lightResult : {lightResult} </p>
      <p>
        heavyNum : <input type='number' value={heavyNum} onChange={(e) => {setHeavyNum(e.target.value)}}></input>
      </p>
      <p>
        lightNum : <input type='number' value={lightNum} onChange={(e) => {setLightNum(e.target.value)}}></input>
      </p>
    </div>
  )
}

export default UseMemoComponent