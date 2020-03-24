import React from 'react';

import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const ColorButton = withStyles(theme => ({
  root: {
    color: 'white',
    backgroundColor: 'black',
    boxShadow: '2px 2px 2px 0px rgba(0,0,0,1)',
    '&:hover': {
      backgroundColor: 'black',
      boxShadow: '3px 3px 3px 0px rgba(0,0,0,1)',
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const CustomButton = ({action}) => {
  const classes = useStyles();

  return (
      <ColorButton
        onClick={action}
        color="primary"
        variant="contained"
        className={classes.margin}
        data-testid="waitlist-be-pro-button"
      >
        Posso sair de casa?
      </ColorButton>
  );
};

export default CustomButton;
