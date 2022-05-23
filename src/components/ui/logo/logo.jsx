import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, TextLogo } from "./styled";
import { AppRoute } from "/src/const";

const Logo = () => {
  return (
    <StyledLogo href={AppRoute.MAIN}>
      <LogoImage />
      <TextLogo>Фермерские продукты</TextLogo>
    </StyledLogo>
  );
};

export default Logo;
