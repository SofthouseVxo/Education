import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from './Dialog';

class Header extends Component {

  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div className="header">
        <h3>Header</h3>
        <p>User is: {this.props.user}</p>

        {this.props.dialogVisible && <Dialog/>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  dialogVisible: state.root.dialogVisible
})

export default connect(mapStateToProps)(Header);