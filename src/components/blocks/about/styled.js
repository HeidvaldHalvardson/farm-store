import styled from "styled-components";
import aboutImage from "/src/assets/about.svg";

export const StyledAbout = styled.section`
  width: 100%;
  background-color: #d8ecfe;
  background-repeat: no-repeat;
  background-position: bottom right 90px;
  background-image: url(${aboutImage});
`;

export const AboutWrapper = styled.div`
  padding: 183px 90px;
  width: 550px;
`;
