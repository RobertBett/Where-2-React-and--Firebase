import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers';
import {
  TextField, Typography, Paper, InputAdornment, Grid, Fab, Zoom, FormControl, InputLabel,
  Select, Input, MenuItem, Chip,
} from '@material-ui/core';
import TimeIcon from '@material-ui/icons/AccessTime';
import DateIcon from '@material-ui/icons/Event';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { styles } from '../../../utils/styles';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      extend: false,
      category: [],
    };
    this.handleForm = this.handleForm.bind(this);
  }


  FormSubmit = (event) => {
    event.preventDefault();
    this.handleCreateEvent(this.state);
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
      category:
      state.category.filter(item => item !== categoryToDelete),
    }));
  }

  getStyles = category => ({
    fontWeight:
        this.state.category.indexOf(category) === -1
          ? this.props.theme.typography.fontWeightRegular //eslint-disable-line
          : this.props.theme.typography.fontWeightMedium, //eslint-disable-line
  })

  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    const { classes } = this.props;
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
                  value={this.state.title}
                  onChange={this.handleForm}
                  autoComplete="title"
                  variant="outlined"
                  label="Event Title"
                  className={classes.textFieldColor}
                  fullWidth
                />
                <DatePicker
                  margin="normal"
                  label="What Day is the Event"
                  name="eventDate"
                  onChange={this.handleDateChange}
                  value={this.state.DateTime}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
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
                    startAdornment: (
                      <InputAdornment position="start">
                        <TimeIcon />
                      </InputAdornment>),
                  }}
                />
                <FormControl fullWidth>
                  <InputLabel htmlFor="select-multiple-chip">What kind of Event is It ?</InputLabel>
                  <Select
                    multiple
                    variant="outlined"
                    color="primary"
                    value={this.state.category}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-chip" />}
                    className={classes.chipSelect}
                    renderValue={selected => (
                      <div className={classes.chipSelect}>
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
                  required
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
                      <Fab
                        color="primary"
                        aria-label="Add"
                        className={classes.fab}
                        onClick={this.FormSubmit}
                        onMouseEnter={this.handleButton}
                        type="submit"
                      >
                        <AddIcon />
                      </Fab>
                    )}
              </Paper>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventForm);
