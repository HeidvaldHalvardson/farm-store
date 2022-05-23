import styled from "styled-components";
import { Ul } from "/src/components/ui/styled";

export const StyledFeatures = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const FeaturesList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FeaturesItem = styled.li`
  margin-top: 20px;
  margin-right: 20px;
`;
