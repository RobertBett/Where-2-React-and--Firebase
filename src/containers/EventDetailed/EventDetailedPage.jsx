import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import { styles } from '../../utils/styles';

const EventDetailedPage = ({ classes }) => (
  <div className={classes.EventRoot}>
    <Grid justify="center" container spacing={16}>
      <Grid item xs={9}>
        <EventDetailedHeader />
        <EventDetailedChat />
        <EventDetailedInfo />
      </Grid>
      <Grid item xs={3}>
        <EventDetailedSidebar />
      </Grid>
    </Grid>
  </div>
);

EventDetailedPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventDetailedPage);
