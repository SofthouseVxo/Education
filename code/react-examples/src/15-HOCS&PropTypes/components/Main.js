import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withCustomProp from '../HOCS/withCustomProp';

class Main extends Component {
  render() {
	  return (
      <div className="App">
				<p>{this.props.newProp} in Main</p>
      </div>
    );
  }
}

Main.propTypes = {
  newProp: PropTypes.number.isRequired
}

export default withCustomProp(Main);

