export const styles = theme => ({
  root: {
    flexGrow: 1,
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

  // Nav Bar Styling
  grow: {
    flexGrow: 1,
  },
  NavbarSpacing: {
    marginBottom: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  // Event Dashboard styles
  media: {
  },
  actions: {
    display: 'flex',
  },
  card: {
    marginBottom: theme.spacing.unit * 5,
    maxWidth: '500px',

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

});
