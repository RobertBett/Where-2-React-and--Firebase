const drawerWidth = 240;
export const styles = theme => ({

  root: {
    display: 'flex',
    height: '100%',
  },


  light: '#fff',
  EventRoot: {
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4,
  },


  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },


  formButton: {
    color: '#fff',
  },


  fab: {
    marginLeft: '40%',
    marginTop: '5px',
  },


  fabExtended: {
    marginLeft: '30%',
    marginTop: '5px',
  },


  fabExtendedIcon: {
    marginRight: theme.spacing.unit,
  },


  buttonProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },

  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },

  buttonSuccess: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '40%',
    marginTop: '5px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },

  tabText: {
    textTransform: 'capitalize',
    fontSize: '0.9rem',
    fontWeight: '600',
  },


  tabColor: {
    color: theme.palette.secondary.main,
  },


  textFieldColor: {
    borderColor: theme.palette.secondary.main,
  },


  radioButtonLabel: {
    paddingLeft: '14px',
    paddingTop: '14px',
    paddingBottom: '14px',
  },


  radioButtonForm: {
    padding: '4px 20px',
  },


  formHeaders: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '600',
    backgroundColor: 'rgba(48, 48, 48, .5)',
    padding: '15px',
    textAlign: 'center',
    borderRadius: '2px',
  },


  settingsNav: {
    backgroundColor: 'rgba(48, 48, 48, .5)',
    color: 'rgba(255, 255, 255, 0.8)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    borderRadius: '2px',
  },

  fabProgress: {
    color: theme.palette.secondary.main,
    position: 'relative',
    top: '32px',
    right: '61px',
  },


  chipSelect: {
    overflowX: 'scroll',
  },


  chip: {
    padding: '10px',
    margin: '5px',
  },


  // Event Dashboard styles
  mobileStepper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },


  media: {
  },


  actions: {
    display: 'flex',
  },


  card: {
    marginBottom: theme.spacing.unit * 5,
    maxWidth: '500px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',

  },


  avatar: {
    backgroundColor: theme.palette.primary.main,
  },


  icon: {
    width: 30,
    height: 30,
  },


  img: {
    height: '100%',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    maxHeight: 300,
    maxWidth: 1000,
  },


  rightSideButton: {
    marginLeft: 'auto',
  },


  // SIDE BAR STYLING
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // backgroundColor: 'rgba(244,67,54,.9)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  listItemDrawer: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '600',
  },
  navLinkActive: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
    },
  },
  navLink: {
    marginTop: '10px',
    marginBottom: '10px',
  },

  '& a:active': {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
  },
  menuButton: {
    marginLeft: 4,
    marginRight: 36,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  hide: {
    display: 'none',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100%',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: 'rgba(48, 48, 48, .5)',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    backgroundColor: 'rgba(48, 48, 48, .5)',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
});
