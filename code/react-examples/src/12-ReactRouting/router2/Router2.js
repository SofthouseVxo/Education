import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Router2 extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link><br />
        <Link to="/old-match">Old Match, to be redirected</Link><br />
        <Link to="/will-match">Will Match</Link><br />
        <Link to="/will-not-match">Will Not Match</Link><br />
        <Link to="/also/will/not/match">Also Will Not Match</Link><br />

        <hr />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/will-match" component={WillMatch} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

// Home function Component
function Home() {
  return (
    <div>
    <Redirect to="/will-match" />

    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
    </div>
  );
}

// WillMatch function Component
function WillMatch() {
  return <h3>Matched!</h3>;
}

// NoMatch function Component
function NoMatch(props) {
  console.log(props);
  return (
    <h3>
      No match for <code>{props.location.pathname}</code>
    </h3>
  );
}

export default Router2;
