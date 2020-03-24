import React from 'react';

import {Container, ErrorMessage} from './styles';

const BoundaryApi = props => (
  <Container>
    <ErrorMessage data-testid="error-boundary-api">{props.error}</ErrorMessage>
  </Container>
);

export default BoundaryApi;
