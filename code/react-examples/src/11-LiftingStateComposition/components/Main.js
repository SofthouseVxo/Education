import React, { Component } from 'react';

class Main extends Component {

	onClick = () => {
		console.log('hello');
	}

  render() {
		console.log(this.props);

    return (
      <div className="App">
				<p>{this.props.input}</p>
      </div>
    );
  }
}

export default Main;
