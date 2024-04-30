import React, { Component } from 'react'

// rcc: react class component
export default class RefComponent extends Component {
  /*
    JSX안에서 DOM에 id를 달면 해당 DOM을 렌더링할 때 그대로 전달이 된다.
    ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 HTML에서 중복 id가 생길 문제가 생기지 않는다.
  */
  // ref(reference) 선언
  refName = React.createRef();

  btn1Handler = () => {
    const name = document.getElementById('name').value;
    alert(name);
  };
  btn2Handler = () => {
    const name = this.refName.current.value;
    alert(name);
  };

  render() {
    return (
      <div className='RefComponent'>
        <h4>RefComponent</h4>
        {/* id 속성 */}
        <p>
          <input type='text' id="name" />
          <button onClick={this.btn1Handler}>확인</button>
        </p>
        {/* ref 속성 */}
        <p>
          <input type='text' ref={this.refName} />
          <button onClick={this.btn2Handler}>확인</button>
        </p>
        <hr></hr>
      </div>
    )
  }
}
