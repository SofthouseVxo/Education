import React, { Component, Fragment } from 'react';
import Clock from './components/Clock';
import ParentComponent from './components/ParentComponent';

class App extends Component {

  constructor(props){
    super(props);

    /*
    * Sets the initial state
    * Setting this.state can only be done like this in the constructor
    */
    this.state = {
      showClock: true
    }

    this.setTimer();
  }

  setTimer(){
    setTimeout(()=>{
      // Sets a new state
      this.setState({showClock: false})
    }, 5000)
  }

  render() {
    return (
      <Fragment>
        { this.state.showClock ? <Clock/> : null }
        <ParentComponent />
      </Fragment>
    );
  }
}

export default App;
