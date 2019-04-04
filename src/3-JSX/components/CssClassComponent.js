import React, { Component } from 'react';

class CssClassComponent extends Component {

  myCssClass = 'my-css-class';
  myColor = {
    color: '#ff0000'
  };

  render() {
    return (
        <div className={this.myCssClass}>My color -> {this.myColor.color} here</div>
    )
  }
}

export default CssClassComponent;
