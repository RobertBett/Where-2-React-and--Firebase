import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../utils/styles';
import Eventlist from './EventList/Eventlist';


class EventDashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={32}>
          <Grid item xs={7}>
            <Eventlist />
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventDashboard);
