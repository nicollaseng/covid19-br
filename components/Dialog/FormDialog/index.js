import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const FormDialog = ({ children, ...props }) => {
  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
        onClose={() => props.action()}
      >
        {children}
      </Dialog>
    </div>
  );
};

FormDialog.defaultProps = {
  rightButton: 'Validate',
  title: 'Code Validation',
  type: '',
  label: 'Invitation code here',
  message: "It's time to be PRO. Insert your invitation code below",
};

export default FormDialog;
