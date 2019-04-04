import React, { Component, Fragment } from 'react';

class MultipleComponent extends Component {

  render(){
    return (
      [
        <p>Hello</p>,
        <p>Hello</p>,
        <p>Hello</p>,
        <p>Hello</p>,
        <p>Hello</p>
      ]

      // <div>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      // </div>

      // <Fragment>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      // </Fragment>

      // <React.Fragment>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      //   <p>Hello</p>
      // </React.Fragment>
    )
  }
}

export default MultipleComponent;
