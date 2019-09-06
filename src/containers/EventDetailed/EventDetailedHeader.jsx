import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { withStyles } from '@material-ui/core/styles';
import {
  Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, MobileStepper, Button,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { formatEventTime } from '../../utils/dateParser';
import { styles } from '../../utils/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class EventDetailedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      event: {
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
    };
  }

    handleNext = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
    };

    handleBack = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep - 1,
      }));
    };

    handleStepChange = (activeStep) => {
      this.setState({ activeStep });
    };

    render() {
      const { classes, theme } = this.props;
      const { activeStep, event } = this.state;
      const maxSteps = event.eventPhotos.length;
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={(
              <Avatar aria-label="Recipe" color="primary" src={event.hostPhotoURL} className={classes.avatar}>
        R
              </Avatar>
            )}
            action={(
              <IconButton color="primary">
                <MoreVertIcon />
              </IconButton>
            )}
            title={event.title}
            subheader={formatEventTime(new Date(event.DateTime).toISOString())}
          />
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {event.eventPhotos.map((step, index) => (
              <div key={step.id}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={(
              <IconButton color="primary" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </IconButton>
            )}
            backButton={(
              <IconButton color="primary" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </IconButton>
            )}
          />
          <CardContent>
            <Typography component="p">
              {event.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button className={classes.rightSideButton} color="primary">View Event</Button>
          </CardActions>
        </Card>
      );
    }
}

EventDetailedHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  //   event: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventDetailedHeader);
