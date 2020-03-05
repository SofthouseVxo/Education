import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withCustomEvent from '../HOCS/withCustomEvent';

class Bottom extends Component {

  static propTypes = {
    value: PropTypes.number,
    customEvent: PropTypes.func.isRequired
  }

	onClick = () => {
    this.props.customEvent();
	}

  render() {
    return (
      <React.Fragment>
        <p>{this.props.value}</p>
        <button onClick={this.onClick}>Click me to update value</button>
      </React.Fragment>
    );
  }
}

export default withCustomEvent(Bottom);
