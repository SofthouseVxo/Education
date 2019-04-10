import React, { Component } from 'react';

import { ThemeContext } from '../contexts';

class TestComponent extends Component {

  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <p>TestComponent</p>
        <p>{this.context}</p>
      </div>
    );
  }
}

export default TestComponent;
