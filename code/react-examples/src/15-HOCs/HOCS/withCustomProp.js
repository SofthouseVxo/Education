import React, { Component } from 'react';

export default function withCustomProp(WrappedComponent, selectData) {
  return class extends Component {
    render() {
      const newProp = 12;

      return <WrappedComponent newProp={newProp} {...this.props}/>;
    }
  };
}