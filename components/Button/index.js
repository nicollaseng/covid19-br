import React from 'react';
import { Button, ButtonContainer } from './styles';

const CustomButton = ({action}) => {
  return (
    <ButtonContainer onClick={action}>
      <Button>POSSO SAIR DE CASA?</Button>
    </ButtonContainer>
  );
};

export default CustomButton;
