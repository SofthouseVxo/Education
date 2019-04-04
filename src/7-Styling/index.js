import React, { Component, Fragment } from 'react';
import testImage from './assets/test.jpg';
import './styles.css';
import MyComponent from './components/MyComponent';
import ModuleStylingComponent from './components/ModuleStylingComponent';

class Styling extends Component {
  render() {
    const divStyle = {
      color: 'blue',
      fontSize: '44px'
    };
    const redColor = '#ff0000';
    const greenColor = '#00ff00';

    const condition = true;

    return (
      <Fragment>
        <div style={divStyle}>Hello World!</div>
        <div style={{color: redColor}}>Hello Växjö!</div>
        <div style={{color: condition ? redColor : greenColor}}>Hello Teleborg!</div>

        <img src={testImage} style={{width: '300px'}} alt="description"/>
        {/* globalStyle is in index.css and does NOT need to be imported */}
        <div className="globalStyle"/>
        {/* importedStyle is in App.css and needs to be imported */}
        <div className="importedStyle"/>
        <MyComponent/>
        <ModuleStylingComponent/>
      </Fragment>
    );
  }
}

export default Styling;
