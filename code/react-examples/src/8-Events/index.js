import React, { Component, Fragment } from 'react';
import EventsComponent from './components/EventsComponent';
// import ListEventComponent from './components/ListEventComponent';

class Events extends Component {
  render() {
    return (
      <Fragment>
        <EventsComponent/>
        {/* <ListEventComponent/> */}
      </Fragment>
    );
  }
}

export default Events;
