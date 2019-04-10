import React, { Component } from 'react';
// import JSX from './3-JSX';
// import ElementsComponents from './4-Elements&Components';
// import StateLifecycles from './5-State&Lifecycles';
// import Events from './6-Events';
// import Styling from './7-Styling';
// import ReactRouting from './10-ReactRouting';
// import Hooks from './11-Hooks';
// import HOCSAndProptypes from './12-HOCS&PropTypes';
import UsingContext from './14-Context';
// import AdvancedCompositing from './16-AdvancedComposition';
// import Reduxer from './13-Redux';


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

        {/* <JSX/> */}
        {/* <ElementsComponents/> */}
        {/* <StateLifecycles/> */}
        {/* <Events/> */}
        {/* <Styling/> */}
        {/* <ReactRouting/> */}
        {/* <Hooks/> */}
        {/* <HOCSAndProptypes/> */}
        <UsingContext/>
        {/* <AdvancedCompositing/> */}


        {/* Make sure to fix setup in index.js before using redux */}
        {/* <Reduxer/> */}
      </div>
    );
  }
}

export default App;
