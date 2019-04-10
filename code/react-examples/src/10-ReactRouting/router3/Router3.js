import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from './Contact';

class Router3 extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Start</Link><br />
          <Link to="/about">Om oss</Link><br />

          <hr />

          <Route exact path="/" component={Start} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default Router3;

function Start() {
  return (
    <div>
      <h2>Start-sidan</h2>
    </div>
  );
}

function About(props) {

  return (
    <div>
      <h2>About-sidan</h2>
      <Contact myHistory={props.history}/>
    </div>
  );
}