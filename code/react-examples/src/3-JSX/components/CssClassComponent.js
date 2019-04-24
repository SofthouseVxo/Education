import React, { Component } from 'react';

class CssClassComponent extends Component {

  myCssClass = 'my-css-class';
  myColor = {
    color: '#686de0'
  };

  render() {
    return (
        <div className={this.myCssClass}>My color in text --> {this.myColor.color}</div>
    )
  }
}

export default CssClassComponent;
