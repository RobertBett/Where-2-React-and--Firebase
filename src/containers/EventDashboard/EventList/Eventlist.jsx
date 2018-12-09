import React, { Component } from 'react';
import EventListItem from './EventListItem';

export default class Eventlist extends Component {
  render() {
    return (
      <div>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    );
  }
}
