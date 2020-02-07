import React, { Component } from 'react';

class Child extends Component {

	onClick = () => {
		console.log('hello');
	}

  render() {
		console.log(this.props);

    return (
      this.props.children()
    );
  }
}

export default Child;
