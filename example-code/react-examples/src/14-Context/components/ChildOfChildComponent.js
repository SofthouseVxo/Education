import React, { Component } from 'react';

import { ThemeContext } from '../contexts';

class ChildOfChildComponent extends Component {

  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <p>Child Of ChildComponent</p>
        {/* Using whats sent in from props */}
        {/* {this.props.theme} */}

        {/* Using whats in context */}
        {this.context}
      </div>
    );
  }
}

export default ChildOfChildComponent;
