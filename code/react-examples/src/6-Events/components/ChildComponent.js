import React, { Component } from 'react';

class ChildComponent extends Component {

  render() {
    // The method we passed in will end up in props
    // console.log(this.props)
    return (
      <div>
        {/* Calling the method we passed in, and we pass a string in args*/}
        <button onClick={()=>this.props.myFunction('passed args')}>
          Click me in Child!
        </button>
      </div>
    );
  }
}

export default ChildComponent;
