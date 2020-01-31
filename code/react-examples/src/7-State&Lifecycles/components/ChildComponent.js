import React from 'react';

class ChildComponent extends React.Component {

  // Will work until React 17
  UNSAFE_componentWillReceiveProps(nextProps){

  }

  render() {
    console.log('REnder in child');
    return (
      <div>
       Child
       <br/>
       <br/>
       {this.props.value}
      </div>
    );
  }
}

export default ChildComponent;
