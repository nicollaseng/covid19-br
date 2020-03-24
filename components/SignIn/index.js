import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const SignIn = props => {
  const handleInput = event => {
    console.log(event.target.name, event.target.value)
  }
  return (
    <>
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="email"
          name="email"
          margin="dense"
          type="email"
          label="email"
          onChange={handleInput}
        />
        <TextField
          autoFocus
          fullWidth
          id="password"
          name="password"
          margin="dense"
          type="password"
          label="password"
          onChange={handleInput}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.action()} color="primary">
          Cancel
        </Button>
        <Button onClick={() => props.action()} color="primary">
          Login
        </Button>
      </DialogActions>
    </>
  );
}

export default SignIn
