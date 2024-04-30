import React, { Component } from 'react'

export default class LifeCycleComponent extends Component {

  state = {
    count :0,
    isVisible : true,
  };
  
  componentDidMount() {
    console.log('componentDidMount ...');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate ...');
    return true;
  }
  render() {
    console.log('render ...');

    return (
      <div className='LifeCycleComponent'>
        <h4>LifeCycleComponent</h4>
        <p>
          count : {this.state.count} <br />
          {/* 버튼을 누를 때 마다 리렌더링 */}
          <button onClick ={() => {this.setState({count : this.state.count + 1})}}>증가</button>
          <button onClick ={() => {this.setState({count : this.state.count - 1})}}>감소</button>
        </p>
        <hr />
      </div>
    )
  }
  componentDidUpdate(){
    console.log('componentDidUpdate ...');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount ...');
  }
}
