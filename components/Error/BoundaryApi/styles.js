import styled from 'styled-components';

import {colors} from '../../../global/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 0 0;
`;

export const ErrorMessage = styled.span`
  color: ${colors.error.primary};
  font-size: calc(1px + 1.6vmin);
  text-align: center;
`;
