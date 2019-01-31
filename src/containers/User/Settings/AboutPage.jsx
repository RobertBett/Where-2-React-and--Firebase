import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles, Grid, Paper, TextField, Fab, Typography,
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputAdornment,
  InputLabel, Select, Input, MenuItem, Chip, Zoom,
} from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import DateIcon from '@material-ui/icons/Event';
import { DatePicker } from 'material-ui-pickers';
import { styles } from '../../../utils/styles';


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        'Music',
        'Visual Arts ',
        'Performing Arts ',
      ],
      extend: false,
    };
  }

  getStyles = category => ({
    fontWeight:
        this.state.category.indexOf(category) === -1
          ? this.props.theme.typography.fontWeightRegular //eslint-disable-line
          : this.props.theme.typography.fontWeightMedium, //eslint-disable-line
  })

  handleChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handleDelete = (categoryToDelete) => {
    this.setState(state => ({
      category:
      state.category.filter(item => item !== categoryToDelete),
    }));
  }

  handleButton =() => {
    this.setState(prevState => ({
      extend: !prevState.extend,
    }));
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
      <div>
        <div>
          <Grid justify="center" container spacing={16}>
            <Grid item xs={12} sm={8}>
              <form onSubmit={this.FormSubmit}>
                <Typography
                  className={classes.formHeaders}
                  variant="h6"
                  color="inherit"
                  noWrap
                >
            About Me
                </Typography>
                <Paper className={classes.paper}>
                  <TextField
                    autoFocus
                    id="Username"
                    name="Username"
                    value={this.state.title}
                    onChange={this.handleForm}
                    autoComplete="Username"
                    variant="outlined"
                    label="Username"
                    className={classes.textFieldColor}
                    fullWidth
                  />
                  <FormControl variant="outlined" fullWidth component="fieldset">
                    <FormLabel className={classes.radioButtonLabel} component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      value={this.state.value}
                      onChange={this.handleCheck}
                      className={classes.radioButtonForm}
                    >
                      <Grid container spacing={16}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="PrivateGender" control={<Radio />} label="Id rather not say" />
                      </Grid>
                    </RadioGroup>
                  </FormControl>

                  <DatePicker
                    keyboard
                    margin="normal"
                    label="Whats Your Date of Birth ?"
                    name="DOB"
                    onChange={this.handleDateChange}
                    value={this.state.DateTime}
                    variant="outlined"
                    format="MM/dd/yyyy"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DateIcon />
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

                  <FormControl fullWidth>
                    <InputLabel htmlFor="select-multiple-chip">What are your interests ?</InputLabel>
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
                    multiline
                    rows={5}
                    name="AboutMe"
                    value={this.state.AboutY}
                    onChange={this.handleForm}
                    id="AboutMe"
                    autoComplete="AboutMe"
                    label="Tell us about Yourself"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />

                  <FormControl variant="outlined" fullWidth component="fieldset">
                    <FormLabel className={classes.radioButtonLabel} component="legend">Whats Your Relationship Status</FormLabel>
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      value={this.state.value}
                      onChange={this.handleCheck}
                      className={classes.radioButtonForm}
                    >
                      <Grid container spacing={16}>
                        <FormControlLabel value="Single" control={<Radio />} label="Im Single" />
                        <FormControlLabel value="InRelationship" control={<Radio />} label="im In a Relationship" />
                        <FormControlLabel value="Married" control={<Radio />} label="Im Married" />
                        <FormControlLabel value="Complicated" control={<Radio />} label="Its Complicated" />
                      </Grid>
                    </RadioGroup>
                  </FormControl>


                  <TextField
                    name="Occupation"
                    value={this.state.hostedBy}
                    onChange={this.handleForm}
                    label="My Occupation"
                    autoComplete="Occupation"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                  { extend
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
                          <UpdateIcon className={classes.fabExtendedIcon} />
                          {this.state.extend && 'Update Profile'}
                        </Fab>
                      </Zoom>
                    )
                    : (
                      <Fab
                        color="primary"
                        aria-label="Add"
                        className={classes.fab}
                        onClick={this.FormSubmit}
                        type="submit"
                        onMouseEnter={this.handleButton}
                      >
                        <UpdateIcon />
                      </Fab>
                    )}
                </Paper>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutPage);
