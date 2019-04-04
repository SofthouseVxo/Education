import React, { Component } from 'react';
import JSX from './3-JSX';
import ElementsComponents from './4-Elements&Components';
import StateLifecycles from './5-State&Lifecycles';
import Events from './6-Events';
import Styling from './7-Styling';
import ReactRouting from './10-ReactRouting';
import Hooks from './11-Hooks';
import HOCSAndProptypes from './12-HOCS&PropTypes';
import UsingContext from './14-Context';
import AdvancedCompositing from './16-AdvancedComposition';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the React Examples Playground!</h1>
        <p>Uncomment the components below to start experimenting</p>
        {/* <JSX/> */}
        {/* <ElementsComponents/> */}
        {/* <StateLifecycles/> */}
        {/* <Events/> */}
        {/* <Styling/> */}
        {/* <ReactRouting/> */}
        {/* <Hooks/> */}
        {/* <HOCSAndProptypes/> */}
        {/* <UsingContext/> */}
        {/* <AdvancedCompositing/> */}
      </div>
    );
  }
}

export default App;
