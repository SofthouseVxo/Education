import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
    return (
      <div>
        <p>ParentComponent</p>
        {/* Passing down theme props */}
        <ChildComponent theme={this.props.theme}/>

        {/* Passing down all props */}
        {/* <ChildComponent {...this.props}/> */}


        {/* Not passing props using context instead */}
        {/* <ChildComponent/> */}
      </div>
    );
  }
}

export default ParentComponent;
