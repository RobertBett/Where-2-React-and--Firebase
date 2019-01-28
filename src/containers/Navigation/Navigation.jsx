import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import cuid from 'cuid';
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
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import AllEventIcon from '@material-ui/icons/EventNote';
import CreateEventIcon from '@material-ui/icons/Event';
import { styles } from '../../utils/styles';

class Navigation extends Component {
        state = {
          open: false,
        };

      handleDrawerOpen = () => {
        this.setState({ open: true });
      };

      handleDrawerClose = () => {
        this.setState({ open: false });
      };

      render() {
        const { classes, theme } = this.props;
        const navItems = [
          {
            link: '/events',
            icon: <AllEventIcon />,
            text: 'All Events',

          },
          {
            link: '/createEvent',
            icon: <CreateEventIcon />,
            text: 'Discover Events',

          },
          {
            link: '/people',
            icon: <PeopleIcon />,
            text: 'My Network',

          },
          {
            link: '/profile/:id',
            icon: <PersonIcon />,
            text: 'My Profile',

          },
          {
            link: '/settings',
            icon: <SettingsIcon />,
            text: 'Settings',

          },
        ];

        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  onClick={this.handleDrawerOpen}
                  color="inherit"
                  aria-label="Open drawer"
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
              onMouseEnter={this.handleDrawerOpen}
              onMouseLeave={this.handleDrawerClose}
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
                  onClick={this.handleDrawerClose}
                  className={this.state.open ? classes.listItemDrawer : classes.hide}
                >
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                { navItems.map(item => (
                  <ListItem
                    button
                    key={cuid()}
                    component={NavLink}
                    activeClassName={classes.navLinkActive}
                    className={classes.navLink}
                    to={item.link}
                  >
                    <ListItemIcon className={classes.listItemDrawer}>
                      { item.icon}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemDrawer }}
                      primary={item.text}
                    />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Drawer>
          </div>
        );
      }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navigation);
