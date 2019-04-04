import React from 'react';

export default function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }


      handleChange() {
        console.log('hello');
      }

      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent handleChange={this.handleChange} {...this.props} />;
      }
    };
  }