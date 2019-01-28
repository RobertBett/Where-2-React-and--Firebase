import React from 'react';
import {
  AppBar, Toolbar, Typography, ListItemIcon, MenuList, MenuItem,
  ListItemText, Grid,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { NavLink } from 'react-router-dom';


const SettingsNav = () => (
  <div>
    <Grid justify="center" container spacing={8}>
      <Grid item xs={12}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography>
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <MenuList>
          <MenuItem component={NavLink} to="/settings/basic">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
          </MenuItem>
        </MenuList>
      </Grid>
      <Grid item xs={12}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography>
              My Account
            </Typography>
          </Toolbar>
        </AppBar>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="My Account" />
          </MenuItem>
        </MenuList>
      </Grid>
    </Grid>
  </div>
);

export default SettingsNav;
