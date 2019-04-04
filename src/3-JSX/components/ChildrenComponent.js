import React, { Component } from 'react';

class ChildrenComponent extends Component {

  render() {
   // You always need an enclosing tag like this div
   return (
      <div>
        <p>
          This p-tag becomes is the child of the DIV
        </p>
        <div>You can have multiple children</div>
      </div>
    )
  }
}

export default ChildrenComponent;
