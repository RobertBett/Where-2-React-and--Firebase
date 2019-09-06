import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TextField, Typography, Paper, InputAdornment, Grid, Fab, Zoom, FormControl, InputLabel,
  Select, Input, MenuItem, Chip, CircularProgress,
} from '@material-ui/core';

import classNames from 'classnames';
import TimeIcon from '@material-ui/icons/AccessTime';
import DateIcon from '@material-ui/icons/Event';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import { TimePicker, DatePicker } from 'material-ui-pickers';
import { styles } from '../../../utils/styles';
import { getEvents } from '../../../store/actions';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extend: false,
      eventInfo: {
        title: '',
        city: '',
        venue: '',
        hostedBy: '',
        description: '',
      },
      category: [],
      DateTime: new Date('January 1 2019'),
    };
    this.handleForm = this.handleForm.bind(this);
  }


  FormSubmit = (event) => {
    event.preventDefault();
    const { DateTime, eventInfo, category } = this.state;
    const newEvent = { ...eventInfo, DateTime, category };
    console.log(newEvent, ['WHATS IN HERE??']);
    this.setState({ extend: false });
    this.props.getEvents(newEvent);
  }

  handleDateChange = (date) => {
    this.setState({ DateTime: date });
  };

  handleButton =() => {
    this.setState(prevState => ({
      extend: !prevState.extend,
    }));
  }

  handleChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handleDelete = (categoryToDelete) => {
    this.setState(state => ({
      category: state.eventInfo.category.filter(item => item !== categoryToDelete),
    }));
  }

  getStyles = category => ({
    fontWeight:
        this.state.category.indexOf(category) === -1
          ? this.props.theme.typography.fontWeightRegular //eslint-disable-line
          : this.props.theme.typography.fontWeightMedium, //eslint-disable-line
  })

  handleForm(event) {
    const { target } = event;
    this.setState(state => ({
      eventInfo: { ...state.eventInfo, [target.name]: target.value },
    }));
  }


  render() {
    const { classes, loading, success } = this.props;
    const { extend } = this.state;
    const categories = [
      'Music',
      'Visual Arts ',
      'Performing Arts ',
      'Film',
      'Lectures & Books ',
      'Fashion',
      'Food & Drink',
      'Festivals & Fairs',
      'Charities ',
      'Sports & Active Life',
      'Nightlife',
      'Kids & Family',
    ];
    if (success) {
      setTimeout(() => {
        this.props.history.push('/events');
      }, 1000);
    }
    return (
      <div className={classes.EventRoot}>
        <Grid justify="center" container spacing={8}>
          <Grid item xs={12} sm={4}>
            <form onSubmit={this.FormSubmit}>
              <Typography
                className={classes.formHeaders}
                variant="h6"
                color="inherit"
                noWrap
              >
              Create Event
              </Typography>
              <Paper className={classes.paper}>
                <TextField
                  autoFocus
                  id="title"
                  name="title"
                  value={this.state.eventInfo.title}
                  onChange={this.handleForm}
                  autoComplete="title"
                  variant="outlined"
                  label="Event Title"
                  className={classes.textFieldColor}
                  fullWidth
                />
                <DatePicker
                  keyboard
                  margin="normal"
                  label="Whats Your Date of Birth ?"
                  name="DOB"
                  onChange={this.handleDateChange}
                  value={this.state.DateTime}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DateIcon />
                      </InputAdornment>),
                  }}
                />
                <TimePicker
                  margin="normal"
                  label="What Time is the Event"
                  name="eventTime"
                  color="secondary"
                  onChange={this.handleDateChange}
                  value={this.state.DateTime}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TimeIcon />
                      </InputAdornment>),
                  }}
                />
                <TextField
                  multiline
                  rows={5}
                  name="description"
                  value={this.state.eventInfo.description}
                  onChange={this.handleForm}
                  id="description"
                  autoComplete="description"
                  label="Tell us about Your Event"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel htmlFor="select-multiple-chip">What kind of Event is It ?</InputLabel>
                  <Select
                    label="what kind of Event is it?"
                    multiple
                    variant="outlined"
                    color="primary"
                    value={this.state.category}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-chip" />}
                    className={classes.chipSelect}
                    renderValue={selected => (
                      <div className={classes.chipSelect}>
                        {console.log(selected, 'LNKRNLNVELKNKL')}
                        {selected.map(value => (
                          <Chip
                            key={value}
                            label={value}
                            onDelete={() => this.handleDelete(value)}
                            className={classes.chip}
                            color="secondary"
                          />
                        ))}
                      </div>
                    )}
                  >
                    {categories.map(category => (
                      <MenuItem
                        key={category}
                        value={category}
                        style={this.getStyles(this.state.category)}
                      >
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  name="city"
                  value={this.state.city}
                  onChange={this.handleForm}
                  id="City"
                  label="City"
                  autoComplete="City"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  name="venue"
                  value={this.state.venue}
                  onChange={this.handleForm}
                  id="Venue"
                  autoComplete="Venue"
                  label="Venue"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />

                <TextField
                  name="hostedBy"
                  value={this.state.hostedBy}
                  onChange={this.handleForm}
                  label="Hosted By"
                  autoComplete="Hosted By"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                {
                  extend
                    ? (
                      <Zoom in={this.state.extend} style={{ transitionDelay: this.state.extend ? '200ms' : '0ms' }}>
                        <Fab
                          color="primary"
                          aria-label="Add"
                          className={classes.fabExtended}
                          onClick={this.FormSubmit}
                          type="submit"
                          onMouseLeave={this.handleButton}
                          variant="extended"
                        >
                          <AddIcon className={classes.fabExtendedIcon} />
                          {this.state.extend && 'Create Event'}
                        </Fab>
                      </Zoom>
                    )
                    : (
                      <div className={classes.wrapper}>
                        <Fab
                          color="primary"
                          aria-label="Add"
                          className={classNames({ [classes.fab]: !success, [classes.buttonSuccess]: success })}
                          onMouseEnter={this.handleButton}
                        >
                          {success ? <CheckIcon /> : <AddIcon /> }

                        </Fab>
                        {loading && <CircularProgress size={66} className={classes.fabProgress} />}
                      </div>
                    )}
              </Paper>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.rootReducer.events,
  loading: state.rootReducer.loading,
  success: state.rootReducer.success,
});

const mapDispatchToProps = dispatch => ({
  getEvents: eventInfo => dispatch(getEvents(eventInfo)),
});


EventForm.propTypes = {
  classes: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(styles, { withTheme: true })(EventForm));
