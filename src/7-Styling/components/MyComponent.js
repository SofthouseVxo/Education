import React, { Component, Fragment } from 'react';

import './MyComponent.css';

class MyComponent extends Component {
  render() {
    return (
      <Fragment>
        In MyComponent
        {/* globalStyle is in index.css and does NOT need to be imported */}
        <div className="globalStyle"/>
        {/*
          ImportedStyle is in MyComponent.css and needs to be imported
          Since this is the same class as we use in App.js this will overwrite
          the style in App.js. Check in console.
        */}
        <div className="importedStyle"/>
      </Fragment>
    );
  }
}

export default MyComponent;
