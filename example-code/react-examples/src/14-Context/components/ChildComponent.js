import React, { Component } from 'react';
import ChildOfChildComponent from './ChildOfChildComponent';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <p>ChildComponent</p>
        {/* Passing down theme props */}
        {/* <ChildOfChildComponent theme={this.props.theme}/> */}

        {/* Passing down all props */}
        {/* <ChildOfChildComponent {...this.props}/> */}

        {/* Not passing props using context instead */}
        <ChildOfChildComponent/>
      </div>
    );
  }
}

export default ChildComponent;
