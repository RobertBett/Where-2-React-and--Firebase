import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon, MenuList, MenuItem, ListItemText, Grid,
  withStyles,
  Typography,
} from '@material-ui/core';
import PhotosIcon from '@material-ui/icons/Photo';
import AccountIcon from '@material-ui/icons/SettingsApplications';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

import { NavLink } from 'react-router-dom';
import { styles } from '../../../utils/styles';

const settingsNavItems = [
  {
    link: '/settings/about',
    icon: <FolderSharedIcon />,
    text: 'About Me',
  },
  {
    link: '/settings/photos',
    icon: <PhotosIcon />,
    text: 'My Photos',
  },
  {
    link: '/settings/account',
    icon: <AccountIcon />,
    text: 'My Account',
  },
];

const SettingsNav = ({ classes }) => (
  <div>
    <Grid justify="center" container spacing={8}>
      <Grid item xs={6}>
        <MenuList
          component="nav"
          subheader={(
            <Typography
              className={classes.settingsHeader}
              variant="h6"
              color="inherit"
              noWrap
            >
            Settings
            </Typography>
          )}
        >
          { settingsNavItems.map(item => (
            <MenuItem
              activeClassName={classes.navLinkActive}
              className={classes.settingsNav}
              key={item.link}
              component={NavLink}
              to={item.link}
            >
              <ListItemIcon
                className={classes.listItemDrawer}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                inset
                classes={{ primary: classes.listItemDrawer }}
                primary={item.text}
              />
            </MenuItem>
          ))
          }
        </MenuList>
      </Grid>
    </Grid>
  </div>
);

SettingsNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SettingsNav);
