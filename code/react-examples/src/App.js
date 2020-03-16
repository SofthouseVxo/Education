import React, { Component } from 'react';
import JSX from './5-JSX';
// import ElementsComponents from './6-Elements&Components';
// import StateLifecycles from './7-State&Lifecycles';
// import Events from './8-Events';
// import Styling from './9-Styling';
// import LiftingStateComposition from './11-LiftingStateComposition';
// import ReactRouting from './12-ReactRouting';
// import Hooks from './13-Hooks';
// import HOCs from './15-HOCs';
// import RenderProps from './15-RenderProps';
// import UsingContext from './15-Context';
// import Advanced from './X-Advanced';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      headerVisible: true
    }
  }

  render() {
    return (
      <div className="App">
      {this.state.headerVisible && (<header className="AppHeader" onClick={()=> {this.setState({headerVisible: false})}}>
        <h1>Welcome to the React Examples Playground!</h1>
        <p>Uncomment the components below to start experimenting, click here to hide header</p>
      </header>)}

        <JSX/>
        {/* <ElementsComponents/> */}
        {/* <StateLifecycles/> */}
        {/* <Events/> */}
        {/* <Styling/> */}
        {/* <ReactRouting/> */}
        {/* <Hooks/> */}
        {/* <HOCs/> */}
        {/* <RenderProps/> */}
        {/* <UsingContext/> */}
        {/* <Advanced/> */}
      </div>
    );
  }
}

export default App;
