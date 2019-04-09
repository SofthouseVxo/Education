import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUser } from '../actions';


class Screen1 extends Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }),
    setNewUser: PropTypes.func.isRequired
  }

  setNewUser = () => {
    const user = {
      id: 1,
      name: 'John Doe'
    };

    this.props.setNewUser(user);
  }

  render() {
    return (
      <div className="screen">
        <h3>Screen1</h3>
        <p>User: {this.props.user ? this.props.user.name : 'No user'}</p>
        <button onClick={this.setNewUser}>Set User</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.root.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setNewUser: (user) => dispatch(setUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
