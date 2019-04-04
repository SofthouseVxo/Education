import React, { Component, Fragment } from 'react';

import { ThemeContext } from './contexts';

import ParentComponent from './components/ParentComponent';
import TestComponent from './components/TestComponent';

class UsingContext extends Component {
  render() {
    return (
      <Fragment>
        {/* Without using context */}
        <ParentComponent theme="light"/>

        {/*
          Now we're using the context we created on above the class
          Passing in the theme value light
        */}
        <ThemeContext.Provider value='dark'>
          <ParentComponent />
        </ThemeContext.Provider>

        {/*
          In TestComponent we can access the context, however its value will
          stay light since we in the ThemeContextProvider above only changed it to dark
        */}
        <TestComponent/>
      </Fragment>
    );
  }
}

export default UsingContext;
