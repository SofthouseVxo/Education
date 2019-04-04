import React, { Component, Fragment } from 'react';
import CssClassComponent from './components/CssClassComponent';
import ChildrenComponent from './components/ChildrenComponent';
import RenderFunctionComponent from './components/RenderFunctionComponent';
import RenderFunction2Component from './components/RenderFunction2Component';
import ConditionalComponent from './components/ConditionalComponent';
import MultipleComponent from './components/MutlipleComponent';

class JSX extends Component {
  render() {
    // return (
    //   <h1 style={{color: 'blue'}}>
    //     My Text
    //   </h1>
    // )

    // return React.createElement(
    //   'h1',
    //   {style: {color:'blue'}},
    //   'hello'
    // );

    return (
      <Fragment>
        <CssClassComponent/>
        {/* <ChildrenComponent/>
        <RenderFunctionComponent/>
        <RenderFunction2Component/>
        <ConditionalComponent/>
        <MultipleComponent/> */}
      </Fragment>
    );

  }
}

export default JSX;
