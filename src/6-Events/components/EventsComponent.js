import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class EventsComponent extends Component {

  handleClick = (e) => {
    console.log('Clicked');
    console.log('Param', e);
    console.log('This', this);
  }

  /*
  * This method will be passed as props to another component,
  * and can be invoked from that component.
  */
  methodToSend = (e) => {
    console.log(e);
    // Here I do whatever in this component
  }

  render() {
    return (
      <div>
        {/* Invokes the method directly even witout clicking */}
        <button onClick={this.handleClick()}>

        {/* Invokes the method when we click */}
        {/* <button onClick={this.handleClick}> */}

        {/* Invokes the method with params */}
        {/* <button onClick={() => this.handleClick('custom param')}> */}
          Click me!
        </button>

        {/* Passing down a method to another component */}
        <ChildComponent
          myFunction={this.methodToSend}
        />
      </div>
    );
  }
}

export default EventsComponent;
