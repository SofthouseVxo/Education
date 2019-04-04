import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Start from './Start';

function Contact() {
  return (
    <div>
      <h2>Kontakt-sidan</h2>
    </div>
  );
}

class Calendar extends Component {

  navigateToCalendar = () => {
    this.props.history.push('/kontakt')
  }

  render(){
    const {
      match,
    } = this.props;

    // Will contain match, location and history objects
    console.log(this.props);

    return (
      <div>
        <h2>Kalender-sidan</h2>
        <p>Date: {match.params.date}</p>
        <button onClick={()=>{this.props.history.push('/kontakt')}}>Navigate to Contact</button>
      </div>
    );
  }
}

class Router1 extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Start-länk</Link><br />
          <NavLink to="/kontakt" activeClassName="my-class">Kontakt-länk</NavLink><br />
          <Link to="/kalender/21dec">Kalender-länk</Link><br />

          <hr />

          <Route path="/" exact component={Start} />
          {/* If two routes match both will be rendered here unlike using <Switch> */}
          {/* <Route exact path="/" component={Start} /> */}
          <Route path="/kontakt" component={Contact} />
          <Route path="/kalender/:date" component={Calendar} />
        </div>
      </Router>
    );
  }
}

export default Router1;
