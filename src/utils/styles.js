const drawerWidth = 240;
export const styles = theme => ({

  root: {
    display: 'flex',
  },
  light: '#fff',
  EventRoot: {
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  formButton: {
    color: '#fff',
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)',

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
