import React, { Component } from 'react';

class DialogComponent extends Component {
  render() {
    console.log(this.props.children);
    return (
    <div className="dialog-background">
      <div className="dialog-wrapper">
        <div className="dialog-header">
          {this.props.headerText}
        </div>
        <div className="dialog-content">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}

export default DialogComponent;