
import { useState } from 'react'
import Dialog  from '../Dialog/FormDialog/index';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { Container, SignInText, SignUpText } from './styles';

const Header = props => {
  const [type, setType] = useState(null)
  const [open, setOpen] = useState(false);

  const handleType = value => {
    setOpen(true);
    setType(value);
  };

  const handleCloseModal = () => {
    setType(null);
    setOpen(false)
  };

  return (
    <Container>
      <SignInText onClick={() => handleType(1)}>Sign up</SignInText>
      <SignUpText onClick={() => handleType(2)} data-testid="enter-code">
        Login
      </SignUpText>
      <Dialog open={open} action={handleCloseModal}>
        {type ? (
          type === 1 ? (
            <SignIn action={handleCloseModal} />
          ) : (
            <SignUp action={handleCloseModal} />
          )
        ) : null}
      </Dialog>
    </Container>
  );
}

export default Header;
