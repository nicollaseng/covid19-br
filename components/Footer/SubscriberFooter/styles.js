import styled from 'styled-components';

import {colors} from '../../../global/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.span`
  font-size: 10px;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 3px;
`;

export const Title = styled.span`
  color: ${colors.grey02};
  font-size: calc(0px + 1.3vmin);
`;
