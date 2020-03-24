import React from 'react';

import {Container, Title, Emoji, Icon} from './styles';

const reactIcon = require('../../../assets/png/react.png');

const SubscriberFooter = () => (
  <Container>
    <Title data-testid="footer-message-one">
      Made with
      <Emoji> ❤️ </Emoji>
      and
    </Title>
    <Icon src={reactIcon} />
    <Title data-testid="footer-message-two">
      {' '}
      - Remoter PRO 2020 - Nicollas Matheus
    </Title>
  </Container>
);

export default SubscriberFooter;
