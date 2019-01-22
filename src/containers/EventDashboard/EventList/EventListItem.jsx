import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { styles } from '../../../utils/styles';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class EventListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
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

      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
      }


      renderAttendeeList = () => {
        const { anchorEl } = this.state;
        const ITEM_HEIGHT = 48;
        const open = Boolean(anchorEl);
        return (
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            <MenuList dense>
              {this.props.event.attendees.map(attendee => (
                <MenuItem key={attendee.id} button>
                  <ListItemAvatar>
                    <Avatar
                      alt={`${attendee.name} + profile photo`}
                      src={attendee.photoURL}
                      color="primary"
                    >
                      {attendee.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={attendee.name} />
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        );
      }


      render() {
        const {
          editEvent, classes, theme, event,
        } = this.props;
        const { activeStep } = this.state;
        const maxSteps = event.eventPhotos.length;
        return (
          <div>
            { this.renderAttendeeList() }
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
                subheader={event.date}
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
                <IconButton color="primary" aria-label="Add to favorites">
                  <Badge badgeContent={event.attendees.length} color="secondary">
                    <FavoriteIcon className={classes.icon} color="primary" />
                  </Badge>
                </IconButton>
                <IconButton color="primary" aria-label="Share" onClick={this.handleClick}>
                  <Badge badgeContent={event.favoritedBy.length} color="secondary">
                    <PeopleIcon />
                  </Badge>
                </IconButton>
                <IconButton color="primary" aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <Button onClick={editEvent(event)} className={classes.rightSideButton} color="primary">View Event</Button>
              </CardActions>
            </Card>
          </div>
        );
      }
}


EventListItem.propTypes = {
  event: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  editEvent: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventListItem);
