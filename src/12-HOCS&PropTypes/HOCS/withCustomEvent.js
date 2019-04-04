import React, { Component } from 'react';

export default function withCustomEvent(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends Component {
      constructor(props){
        super(props);

        this.state = {
          value: 12
        }
      }

      customEvent = () => {
        this.setState({
          value: this.state.value + 1
        })
      }

      render() {
        // Notice that we pass through any additional props
        return (
          <WrappedComponent
            customEvent={this.customEvent}
            value={this.state.value}
            {...this.props}
          />
        )
      }
    };
  }