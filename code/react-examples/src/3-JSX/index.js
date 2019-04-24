import React, { Component, Fragment } from 'react';
import CssClassComponent from './components/CssClassComponent';
import ChildrenComponent from './components/ChildrenComponent';
import RenderFunctionComponent from './components/RenderFunctionComponent';
import RenderFunction2Component from './components/RenderFunction2Component';
import ConditionalComponent from './components/ConditionalComponent';
import MultipleComponent from './components/MutlipleComponent';

class JSX extends Component {
  render() {
    /* Example 1 */
    // return (
    //   <h1 style={{color: '#eb4d4b'}}>
    //     My Text
    //   </h1>
    // )

    /* Example 2 */
    // return React.createElement(
    //   'h1',
    //   {style: {color:'#eb4d4b'}},
    //   'My Text'
    // );

    /* Example 3 */
    return (
      <div style={{backgroundColor: '#7ed6df', minHeight: '100px'}}>
        <CssClassComponent/>
        {/* <ChildrenComponent/> */}
        {/* <RenderFunctionComponent/> */}
        {/* <RenderFunction2Component/> */}
        {/* <ConditionalComponent/> */}
        {/* <MultipleComponent/> */}
      </div>
    );

  }
}

export default JSX;
