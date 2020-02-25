import React, { Component } from 'react';

class ConditionalComponent extends Component {
  
  renderName(user, condition){
    if(condition === true){
      return <p>{user.firstName}</p>
    }

    return <p>{user.lastName}</p>
  }

  render(){
    const user = {
      firstName: 'John',
      lastName: 'Doe'
    }

    const condition = true;

    return (
      <h1>
        Hello, {this.renderName(user, condition)}!
      </h1>
    )
  }
}

export default ConditionalComponent;
