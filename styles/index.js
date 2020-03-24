import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 50%;
`;

export const Covid = styled.span`
  font-size: calc(20px + 3vmin);
  font-weight: 700;
  text-align: center;
`;

export const Country = styled.span`
  font-size: calc(12px + 2.3vmin);
  font-weight: 100;
`;

export const Counters = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

export const CountersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CounterTitle = styled.span`
  font-size: calc(4px + 2vmin);
  font-weight: 700;
  margin: 10px 5px;
`;

export const CounterValue = styled.span`
  font-size: calc(4px + 2vmin);
  font-weight: 400;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex: 0.9;
  flex-direction: column;
`;

export const Image = styled.img`
  width: calc(160px + 10vmin);
  height: calc(150px + 10vmin);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* position: fixed;
  top: 30%; */
`;

export const ImageTitle = styled.span`
  font-size: calc(25px + 7vmin);
  font-weight: 800;
`;

export const ImageMessage = styled.span`
  font-size: 15px;
  margin: 15px 40px;
  color: grey;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
`;

export const LoadingMessage = styled.span`
  font-size: 15px;
  margin: 15px 40px;
  color: grey;
  text-align: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
