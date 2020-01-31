import React, { Component } from 'react';

class ChildrenComponent extends Component {

  render() {
   // You always need an enclosing tag like this div
   return (
      <div style={{border: '2px solid grey', borderRadius: '10px', margin: 10}}>
        <p>
          This p-tag becomes is the child of the DIV
        </p>
        <p>You can have multiple different children</p>
      </div>
    )
  }
}

export default ChildrenComponent;
