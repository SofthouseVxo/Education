import React, { Component } from 'react';

class MainProvider extends Component {

  constructor(props){
      super(props);

      this.state = {
        name: 'robin'
      };
  }

	onClick = () => {
		console.log('hello');
	}

  render() {
		console.log(this.props);

    return (
      this.props.children({name:'kalle'})
    );
  }
}

export default MainProvider;