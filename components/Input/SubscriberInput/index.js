import React, {useState} from 'react';

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    width: '70%',
    boxShadow: '-5px 3.5px 0px 3.5px rgba(0,0,0,1)',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SubscriberInput = ({action}) => {
  const classes = useStyles();

  const handleInput = event => {
    action(event.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        onChange={handleInput}
        data-testid="generic-input"
        placeholder="Insert your e-mail"
        inputProps={{'aria-label': 'search google maps'}}
      />
    </Paper>
  );
};

export default SubscriberInput;
