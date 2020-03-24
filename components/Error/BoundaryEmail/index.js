import React from 'react';

import {Container, ErrorMessage} from './styles';

const BoundaryEmail = props => (
  <Container>
    <ErrorMessage data-testid="error-boundary-email">
      {props.error}
    </ErrorMessage>
  </Container>
);

export default BoundaryEmail;
