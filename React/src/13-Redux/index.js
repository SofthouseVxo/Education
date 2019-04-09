import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles.css';

class Reduxer extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Link to="/">Screen1</Link><br />
          <Link to="/screen2">Screen2</Link><br />

          <Header/>
          <Route path="/" exact component={Screen1} />
          <Route path="/screen1" exact component={Screen1} />
          <Route path="/screen2" exact component={Screen2} />
          </Router>
        <Footer/>
      </Fragment>
    );
  }
}

export default Reduxer;
