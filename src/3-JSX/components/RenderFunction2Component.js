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
          Hello, !
        </h1>
        <p>{this.renderName(user)}</p>
      </div>
    )
  }
}

export default RenderFunction2Component;
