import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withCustomEvent from '../HOCS/withCustomEvent';

class Timer extends Component {

  static propTypes = {
    value: PropTypes.number,
    customEvent: PropTypes.func.isRequired
  }

  componentDidMount(){
    setInterval(()=>{
      this.props.customEvent();
    }, 1000)
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.props.value}</p>
      </React.Fragment>
    );
  }
}

export default withCustomEvent(Timer);
