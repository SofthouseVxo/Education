import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleDialog } from '../actions';

class Footer extends Component {

  static propTypes = {
    setDialogVisible: PropTypes.func.isRequired
  }

  showDialog = () => {
    this.props.setDialogVisible(true);
  }

  render() {
    return (
      <div className="footer">
        <h3>Footer</h3>
        <button onClick={this.showDialog}>Show Dialog</button>
      </div>
    );
  }
}

// maps the dispatch to setDialogVisible which ends up in props
const mapDispatchToProps = (dispatch, ownProps) => ({
  setDialogVisible: (visible) => dispatch(toggleDialog(visible))
})

export default connect(null, mapDispatchToProps)(Footer);
