import React, { Component } from 'react';
import Fab from '@material-ui/core/Button';
import { TimePicker, DatePicker } from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import TimeIcon from '@material-ui/icons/AccessTime';
import DateIcon from '@material-ui/icons/Event';
import InputAdornment from '@material-ui/core/InputAdornment';

class EventForm extends Component {
  FormSubmit = (event) => {
    event.preventDefault();
  }

  handleForm= (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.FormSubmit}>
          <TextField
            id="eventTitle"
            name="eventTitle"
            autoComplete="eventTitle"
            variant="outlined"
            label="Event Title"
            autoFocus
            fullWidth
          />
          <DatePicker
            margin="normal"
            label="What Day is the Event"
            onChange={() => (console.log('hello'))}
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
            onChange={() => (console.log('hello'))}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TimeIcon />
                </InputAdornment>),
            }}

          />
          <TextField
            name="City"
            id="City"
            label="City"
            autoComplete="City"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            required
            name="Venue"
            id="Venue"
            autoComplete="Venue"
            label="Venue"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            name="Hosted By"
            id="Hosted By"
            label="Hosted By"
            autoComplete="Hosted By"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Fab
            type="submit"
            fullWidth
            size="medium"
            variant="extendedFab"
            color="primary"
            margin="normal"
          >
           Submit
          </Fab>
        </form>
      </div>
    );
  }
}

export default EventForm;
