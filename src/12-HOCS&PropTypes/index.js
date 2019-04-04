import React, { Component, Fragment } from 'react';

import Top from './components/Top';
import Main from './components/Main';
import Bottom from './components/Bottom';
import Timer from './components/Timer';

class HOCSAndProptypes extends Component {
  render() {

    const objectFromApp = {
      user: {
        name: 'Jane Doe',
        age: 45,
        run: ()=>{console.log('running')}
      }
    }

    return (
      <Fragment>
        <Top fromApp={objectFromApp}/>
        <Main/>
        <Bottom/>
        <Timer/>
      </Fragment>
    );
  }
}

export default HOCSAndProptypes;
