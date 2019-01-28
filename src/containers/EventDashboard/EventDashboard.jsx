import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { Tab } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/AccessTime';
import Trending from '@material-ui/icons/TrendingUp';
import { styles } from '../../utils/styles';
import Eventlist from './EventList/EventList';
import TabContainer from '../../utils/TabContainer';

class EventDashboard extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      events: [
        {
          id: '1',
          title: 'Trip to Tower of London',
          DateTime: '2018-03-27T11:00:00+00:00',
          eventPhotos: [
            {
              id: 1,
              imgPath: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
            {
              id: 2,
              imgPath: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',

            },
          ],
          category: 'culture',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: 'Tower of London, St Katharine\'s & Wapping, London',
          hostedBy: 'TOM',
          hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
          favoritedBy: [
            1, 2, 3, 4, 4, 5, 5,
          ],
          attendees: [
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
          ],
        },
        {
          id: '2',
          title: 'Trip to Tower of London',
          DateTime: '2018-03-27T11:00:00+00:00',
          eventPhotos: [
            {
              id: 1,
              imgPath: 'https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
            {
              id: 2,
              imgPath: 'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            },
            {
              id: 3,
              imgPath: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          category: 'culture',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: 'Tower of London, St Katharine\'s & Wapping, London',
          hostedBy: 'Bob',
          hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
          favoritedBy: [
            1, 2, 3,
          ],
          attendees: [
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
          ],
        },
      ],
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
        <Grid justify="center" container spacing={8}>
          <Grid item xs={9}>

            <Eventlist editEvent={this.handleEditEvent} events={this.state.events} />
          </Grid>
          <Grid item xs={3}>
            <AppBar position="static" color="primary">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="secondary"
              >
                <Tab label="Trending Events" icon={<Trending />} />
                <Tab label=" Recent Activity" icon={<TimelineIcon />} />
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

export default withStyles(styles)(EventDashboard);
