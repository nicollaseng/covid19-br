import styled from "styled-components";

import { colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.primary};
  justify-content: space-between;
`;

export const SignInText = styled.span`
  padding: 10px;
  text-align: left;
  margin-left: 15px;
  color: ${colors.white01};
  font-size: 12px;
`;

export const SignUpText = styled.span`
  padding: 10px;
  font-size: 12px;
  text-align: left;
  color: ${colors.white01};
`;
