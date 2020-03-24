import styled from 'styled-components'
import { colors } from '../../global/colors'

export const Container = styled.div`
  display: flex;
  margin: 0.5rem 0;
  padding: 1.25rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  /* width: 30%; */
  display: flex;
  width: 40%;
`;

export const Image = styled.img`
  height: 100px;
  width: 130px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 14px;
  align-self: flex-end;
`;

export const Subtitle = styled.span`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export const Title = styled.span`
  /* margin: 0 0 1rem 0; */
  font-size: 1.5rem;
`;
