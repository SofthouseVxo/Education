import React, { Component, Fragment } from 'react';

import FunctionState from './components/FunctionState.js';
import ClassState from './components/ClassState.js';

import { useCustomHook } from './useCustomHook';

function Hooks () {

  const isOnline = useCustomHook(false);

  return (
    <Fragment>
      {isOnline && <FunctionState someProps={isOnline}/>}
      {/* <ClassState someProps={isOnline}/> */}
    </Fragment>
  );
}

export default Hooks;
