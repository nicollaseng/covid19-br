import styled from 'styled-components';

export const AdvertisementContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 30px 10px;
`;

export const AdvisoryContainer = styled.div`
  width: 95%;
  display: flex;
  flex: 0.1;
  align-items: center;
  align-self: center;
  @media screen and (min-width: 750px) {
    width: 350px;
  }
  @media screen and (max-width: 750px) {
    width: 260px;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  flex: 0.1;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SearchContainer = styled.div`
  width: 95%;
  margin: 30px 0;
  align-self: center;
  @media screen and (min-width: 750px) {
    width: 550px;
  }
  @media screen and (max-width: 750px) {
    width: 88%;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f2f2f2;
`;

export const Subtitle = styled.span`
  margin: 0;
  line-height: 1.15;
  text-align: center;
  font-size: 1rem;
`;

export const Title = styled.span`
  margin: 0;
  line-height: 1.15;
  text-align: center;
  font-size: 3rem;
`;
