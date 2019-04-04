import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withCustomProp from '../HOCS/withCustomProp';

class Top extends Component {

  static propTypes = {
    newProp: PropTypes.number.isRequired,
    fromApp: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        run: PropTypes.func.isRequired
      })
    })
  }

  render() {
	  return (
      <div>
				<p>{this.props.newProp} in Top</p>
      </div>
    );
  }
}

export default withCustomProp(Top);

