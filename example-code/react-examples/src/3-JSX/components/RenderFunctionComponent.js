import React, { Component } from 'react';

class RenderFunctionComponent extends Component {

  renderName(){
    return <p>John Doe</p>
  }

  render() {
    return (
       this.renderName()
     )
   }
}

export default RenderFunctionComponent;
