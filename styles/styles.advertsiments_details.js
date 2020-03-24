import styled from 'styled-components';
import {colors} from '../global/colors'

export const City = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
`;

export const ChatContainer = styled.div``;

export const ChatButton = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 70px;
  /* height: 70px; */
  padding: 10px;
  margin-top: 15px;
  background-color: ${colors.primary};
`;

export const ChatText = styled.span`
  color: ${colors.white01};
  font-size: 14.5px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  margin: 1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Description = styled.span`
  font-size: 13.5px;
  margin: 15px 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  justify-content: space-around;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 80%;
  padding: 0.4rem;
  @media (min-width: 750px) {
    width: 500px;
    height: 500px;
  }
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const OwnerName = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
`;

export const OwnerContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0.2rem;
  margin: 0.2rem 0;
  justify-content: space-between;
`;

export const Whatsapp = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
`;
