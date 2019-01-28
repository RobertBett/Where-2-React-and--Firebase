import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import TimeIcon from '@material-ui/icons/AccessTime';
import DateIcon from '@material-ui/icons/Event';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddEventIcon from '@material-ui/icons/EventAvailable';
import { styles } from '../../../utils/styles';
import TabContainer from '../../../utils/TabContainer';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.selectedEvent || {
      title: '',
      DateTime: new Date(),
      city: '',
      venue: '',
      hostedBy: '',
    };
    console.log(this.props.selectedEvent);
    this.handleForm = this.handleForm.bind(this);
  }


  componentDidMount() {
    if (this.props.selectedEvent) {
      const {
        title, DateTime, city, venue, hostedBy,
      } = this.props.selectedEvent;
      this.setState({
        title,
        DateTime,
        city,
        venue,
        hostedBy,
      });
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      console.log('NEXT', nextProps.selectedEvent, 'CURRENT', this.props.selectedEvent);
      if (this.props.selectedEvent) {
        const {
          title, DateTime, city, venue, hostedBy,
        } = this.props.selectedEvent;
        this.setState({
          title,
          DateTime,
          city,
          venue,
          hostedBy,
        });
      }
    }
  }


  FormSubmit = (event) => {
    event.preventDefault();
    this.handleCreateEvent(this.state);
  }

  handleDateChange = (date) => {
    this.setState({ DateTime: date });
  };


  handleForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.EventRoot}>
        <Grid justify="center" container spacing={0}>
          <Grid item xs={12} sm={4}>
            <AppBar position="static" color="primary">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
              >
                <Tab label="Create Event" icon={<AddEventIcon />} />
              </Tabs>
              <TabContainer>
                <form onSubmit={this.FormSubmit}>
                  <Paper className={classes.paper}>
                    <TextField
                      id="title"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleForm}
                      autoComplete="title"
                      variant="outlined"
                      label="Event Title"
                      autoFocus
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
                    <Fab
                      color="primary"
                      aria-label="Add"
                      className={classes.fab}
                      onClick={this.FormSubmit}
                      type="submit"
                    >
                      <AddIcon />
                    </Fab>
                  </Paper>
                </form>
              </TabContainer>
            </AppBar>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventForm.propTypes = {
  selectedEvent: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventForm);
