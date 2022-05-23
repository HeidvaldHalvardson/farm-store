import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  color: #333333;
  background-color: transparent;
  padding: 0;
  width: auto;

  &:hover,
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`;
