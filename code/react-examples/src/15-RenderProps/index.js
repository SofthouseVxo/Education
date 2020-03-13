import React, { Component } from 'react'

import Wrapper from './components/Wrapper';
import Child from './components/Child';

export default class RenderProps extends Component {
  render() {
    return (
      <Wrapper render={(data) => {
        return <Child data={data}/>
      }}/>
    )
  }
}
