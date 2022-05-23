import styled from "styled-components";
import Title from "../../ui/title/title";
import { Panel } from "../panel/panel";

export const CardPanel = styled(Panel)`
  height: 288px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 12px;
`;

export const CardImage = styled.img`
  margin-right: 20px;
  max-width: 248px;
  height: auto;
`;

export const CardTitle = styled(Title)`
  font-size: 24px;
`;
