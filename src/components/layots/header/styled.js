import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  margin: 0 auto;
  padding-left: ${(props) => props.theme.indentPage};
  padding-right: ${(props) => props.theme.indentPage};
  box-sizing: border-box;
`;
