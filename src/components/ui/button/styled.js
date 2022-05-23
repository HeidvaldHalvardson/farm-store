import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  width: ${(props) => (props.maxWidth ? "100%" : "260px")};
  height: 60px;
  display: block;

  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizePage};
  line-height: 58px;
  color: ${(props) => props.theme.colorWhite};

  padding: 0 24px;
  border: none;

  background-color: ${(props) => props.theme.buttonColor};
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.buttonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
