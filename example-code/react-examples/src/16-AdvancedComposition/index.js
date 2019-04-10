import React, { Component, Fragment } from 'react';
import Top from './components/Top';

import MainProvider from './components/MainProvider';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Top/>

        {/* <MainProvider>
          <p>Hello</p>
        </MainProvider> */}
      </Fragment>
    );
  }
}

export default App;
