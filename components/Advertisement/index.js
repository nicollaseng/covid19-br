import React from 'react';
import { Container, DescriptionContainer, ImageContainer, Image, Price, Title, Subtitle } from './styles'

const Advertisement = ({ advertisement, action, ...props }) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={advertisement.ad_photo} />
        </ImageContainer>
        <DescriptionContainer onClick={action}>
          <Title>{advertisement.name}</Title>
          <Subtitle>{advertisement.description}</Subtitle>
          <Price>R$ {advertisement.price}</Price>
          <Price>
            {advertisement.address.city}/{advertisement.address.state}
          </Price>
        </DescriptionContainer>
      </Container>
    </>
  );
};

export default Advertisement;
