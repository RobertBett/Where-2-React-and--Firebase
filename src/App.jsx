import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import EventDashboard from './containers/EventDashboard/EventDashboard';
import NavBar from './containers/NavBar/NavBar';
import { styles } from './utils/styles';


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <EventDashboard />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
