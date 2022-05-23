import React from "react";
import { StyledFooter } from "./styled";

import Logo from "/src/components/ui/logo/logo";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <span className="footer__copyright">Создано 2021</span>
    </StyledFooter>
  );
};

export default Footer;
