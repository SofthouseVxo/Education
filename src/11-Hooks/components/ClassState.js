import React, { Component } from 'react';

/* Ordinary class component where we update state with setState */
export default class ClassState extends Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0,
    }
  }

  setCount(newCount){
    this.setState({
      count: newCount
    })
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render(){
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount(this.state.count + 1)}>
          Click me
        </button>
      </div>
    );
  }
}