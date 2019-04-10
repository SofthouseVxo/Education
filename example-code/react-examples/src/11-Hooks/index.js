import React, { Component, Fragment } from 'react';

import FunctionState from './components/FunctionState.js';
import ClassState from './components/ClassState.js';

class Hooks extends Component {

  constructor(props){
    super(props);

    this.state = {
      visible: true
    }
  }

  render() {
    return (
      <Fragment>
        { this.state.visible &&
        <Fragment>
          <FunctionState someProps={this.state.visible}/>
          {/* <ClassState someProps={this.state.visible}/> */}
        </Fragment> }

        <button onClick={()=>{this.setState({visible: !this.state.visible})}}>Toggle</button>
       </Fragment>
    );
  }
}

export default Hooks;
