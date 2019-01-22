import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Trending from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddEventIcon from '@material-ui/icons/EventAvailable';
import { styles } from './utils/styles';
import EventDashboard from './containers/EventDashboard/EventDashboard';
import EventDetailedPage from './containers/EventDetailed/EventDetailedPage';
import PeopleDashboard from './containers/User/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './containers/User/UserDetailed/UserDetailedPage';
import SettingsDashboard from './containers/User/Settings/SettingsDashboard';
import EventForm from './containers/EventDashboard/EventForm/EventForm';


class App extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

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
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        {this.videoBackground()}
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.listItemDrawer} variant="h6" color="inherit" noWrap>
              Where 2
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton
              className={this.state.open ? classes.listItemDrawer : classes.hide}
              onClick={this.handleDrawerClose}
            >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/events">
              <ListItemIcon className={classes.listItemDrawer}>
                <AddEventIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemDrawer }}
                primary="Create Events"
              />
            </ListItem>
          </List>
          <List>
            <ListItem button component={Link} to="/events">
              <ListItemIcon className={classes.listItemDrawer}>
                <Trending />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemDrawer }}
                primary="Trending Events"
              />
            </ListItem>
          </List>
          <List>
            <ListItem button component={Link} to="/settings">
              <ListItemIcon className={classes.listItemDrawer}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemDrawer }}
                primary="Settings"
              />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" exact component={EventDashboard} />
            <Route path="/events" exact component={EventDashboard} />
            <Route path="/events/:id" exact component={EventDetailedPage} />
            <Route path="/people" exact component={PeopleDashboard} />
            <Route path="/profile/:id" exact component={UserDetailedPage} />
            <Route path="/settings" exact component={SettingsDashboard} />
            <Route path="/createEvent" exact component={EventForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
