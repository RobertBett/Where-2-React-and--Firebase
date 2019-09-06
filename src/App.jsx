import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './utils/styles';
import EventDashboard from './containers/EventDashboard/EventDashboard';
import EventDetailedPage from './containers/EventDetailed/EventDetailedPage';
import PeopleDashboard from './containers/User/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './containers/User/UserDetailed/UserDetailedPage';
import SettingsDashboard from './containers/User/Settings/SettingsDashboard';
import EventForm from './containers/EventDashboard/EventForm/EventForm';
import Navigation from './containers/Navigation/Navigation';


class App extends React.Component {
  videoBackground =() => {
    const video = '/assets/Palm_Trees.mp4';
    return (
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
           Your Browser is not supported
        </video>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.videoBackground()}
        <Navigation />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" exact component={EventDashboard} />
            <Route path="/events" exact component={EventDashboard} />
            <Route path="/event/:id" exact component={EventDetailedPage} />
            <Route path="/people" exact component={PeopleDashboard} />
            <Route path="/profile/:id" exact component={UserDetailedPage} />
            <Route path="/settings" component={SettingsDashboard} />
            <Route path="/createEvent" exact component={EventForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
