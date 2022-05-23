import styled from "styled-components";

export const FeatureWrapper = styled.div`
  width: 540px;
  min-height: 197px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
`;

export const FeatureHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const FeatureOwner = styled.span`
  padding: 2px 10px;
  background-color: ${(props) => (props.isNegative ? "#f75531" : "#88aa4d")};
  color: ${(props) => props.theme.colorWhite};
  font-size: 14px;
  line-height: 21px;
`;
