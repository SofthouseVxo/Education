import React, { Component } from 'react';

class ListEventComponent extends Component {

  constructor(){
    super();
    this.state = {
      users: ['nisse', 'jane', 'joe']
    }
  }

  removeUser = (userIndex) => {
    console.log('happens');

    let updatedUsers = this.state.users.filter((user,index) => index !== userIndex);
    this.setState({users: updatedUsers});
  }

  renderList = () => {
    return this.state.users.map((user,i)=>{
      return <li key={i} onClick={() => {this.removeUser(i)}}>{user}</li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default ListEventComponent;
