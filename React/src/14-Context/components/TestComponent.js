import React, { Component } from 'react';

import { ThemeContext } from '../contexts';

class TestComponent extends Component {

  static contextType = ThemeContext;

  render() {
    console.log('in test context is: ', this.context)
    return (
      <div>
        <p>TestComponent</p>
      </div>
    );
  }
}

export default TestComponent;
