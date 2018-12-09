export const styles = theme => ({
  root: {
    flexGrow: 1,
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
    maxWidth: '80%',
    margin: 'auto',
  },
  avatar: {
    backgroundColor: '#f44336',
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
    maxHeight: 500,
    maxWidth: 1000,
  },
  rightSideButton: {
    marginLeft: 'auto',
  },

});
