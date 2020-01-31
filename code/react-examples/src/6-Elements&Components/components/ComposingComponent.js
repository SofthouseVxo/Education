import React, { Component, Fragment } from 'react';

class ComposingComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="left">
          {this.props.left}
        </div>
        <div className="right">
          {this.props.right}
        </div>
      </Fragment>
    );
  }
}

export default ComposingComponent;