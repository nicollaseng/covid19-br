import React from 'react';

import {socialNetworks} from '../../utils/socialNetworks';
import {Icon, Container} from './styles';

const SocialNetwork = () => {
  const handleUrl = url => window.open(url);
  return (
    <Container>
      {socialNetworks.map((network, index) => (
        <Icon
          key={index}
          src={network.icon}
          onClick={() => handleUrl(network.url)}
        />
      ))}
    </Container>
  );
};

export default SocialNetwork;
