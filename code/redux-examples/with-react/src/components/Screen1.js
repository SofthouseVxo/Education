import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleDialog } from '../redux/actions';
import { setUser } from '../redux/actions';


class Screen1 extends Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }),
    setNewUser: PropTypes.func.isRequired,
    setDialogVisible: PropTypes.func.isRequired
  }

  setNewUser = () => {
    const user = {
      id: 1,
      name: 'John Doe'
    };

    this.props.setNewUser(user);
  }

  hideDialog = () => {
    this.props.setDialogVisible(false);
  }

  render() {
    return (
      <div className="screen">
        <h3>Screen1</h3>
        <p>User: {this.props.user ? this.props.user.name : 'No user'}</p>
        <button onClick={this.setNewUser}>Set User</button>
        <br/>
        <br/>
        <button onClick={this.hideDialog}>Hide Dialog</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.root.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setNewUser: (user) => dispatch(setUser(user)),
  setDialogVisible: (visible) => dispatch(toggleDialog(visible))
})


export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
