import React, { Component, Fragment } from 'react';
import styles from './ModuleStylingComponent.module.css';
import './ModuleStylingComponent.css';

class ModuleStylingComponent extends Component {
  render() {
    return (
      <Fragment>
        In Module Styling Component
        <div className="moduleTestClass"/>
        <div className={styles.moduleTestClass}/>
      </Fragment>
    );
  }
}

export default ModuleStylingComponent;
