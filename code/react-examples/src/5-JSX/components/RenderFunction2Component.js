import React, { Component } from 'react';

class RenderFunction2Component extends Component {

  renderName(user){
    return <p>{user}</p>
  }

  render(){
    const user = 'John Doe'
    return (
      <div>
        <h1>
          Hello, {this.renderName(user)}!
        </h1>
      </div>
    )
  }
}

export default RenderFunction2Component;
