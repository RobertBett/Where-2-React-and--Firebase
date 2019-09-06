import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { Tab } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/AccessTime';
import Trending from '@material-ui/icons/Whatshot';
import { styles } from '../../utils/styles';
import Eventlist from './EventList/EventList';
import TabContainer from '../../utils/TabContainer';

class EventDashboard extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };


  handleEditEvent = eventToUpdate => () => {
    console.log(eventToUpdate, '[EVENBT TOT ]');
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.EventRoot}>
        <Grid justify="center" container spacing={16}>
          <Grid item xs={9}>
            <Eventlist editEvent={this.handleEditEvent} events={this.state.events} />
          </Grid>
          <Grid item xs={3}>
            <AppBar position="static" color="primary">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                variant="standard"
                indicatorColor="secondary"
              >
                <Tab classes={{ selected: classes.tabColor }} className={classes.tabText} label="Trending Events" icon={<Trending />} />
                <Tab classes={{ selected: classes.tabColor }} className={classes.tabText} label=" Recent Activity" icon={<TimelineIcon />} />
              </Tabs>
              { value === 0
                && (
                  <TabContainer>
                    <Paper className={classes.paper}>
                    Whats Trending
                    </Paper>
                  </TabContainer>
                )
              }
              { value === 1
                && (
                  <TabContainer>
                    <Paper className={classes.paper}>
                      Recent Activity
                    </Paper>
                  </TabContainer>
                )
              }
            </AppBar>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventDashboard);
