import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  /*
  * Is invoked immediately after a component is mounted (inserted into the tree).
  */
  componentDidMount() {
    console.log('componentDidMount runs');

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  /*
  * Is invoked immediately before a component is unmounted and destroyed.
  */
  componentWillUnmount() {
    console.log('WIll unmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  /*
  * Is invoked every time state is updated
  */
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
