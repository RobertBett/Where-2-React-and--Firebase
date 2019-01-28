import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import EventListItem from './EventListItem';

class Eventlist extends Component {
  renderEventsList() {
    const { events, editEvent } = this.props;
    return events.map(event => (
      <Grid container spacing={8} key={event.id} item xs={12} sm={6}>
        <EventListItem editEvent={editEvent} event={event} />
      </Grid>
    ));
  }

  render() {
    return (
      <div>
        <Grid container spacing={32}>
          {this.renderEventsList()}
        </Grid>
      </div>
    );
  }
}

Eventlist.propTypes = {
  events: PropTypes.array.isRequired,
  editEvent: PropTypes.func.isRequired,
};

export default Eventlist;
