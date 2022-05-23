import styled from "styled-components";

export const TitleList = styled.div`
  display: inline-flex;
  margin-bottom: 16px;
`;

export const TitleButton = styled.button`
  border: none;
  padding: 8px 12px;
  cursor: ${(props) => (props.active ? "auto" : "pointer")};
  background-color: ${(props) => (props.active ? "#88aa4d" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  box-sizing: border-box;
`;
