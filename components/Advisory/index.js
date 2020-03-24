import React from 'react'
import { Container, Message, Title } from './styles';

export const Advisory = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Message>{props.message}</Message>
    </Container>
  )
}

Advisory.defaultProps = {
  title: 'Title',
  message: 'Hey this is an advisory'
}

export default Advisory;
