import React from "react";
import { StyledHeader } from "./styled";

import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layots/nav/nav";

const Header = ({ pageUrl }) => {
  return (
    <StyledHeader>
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledHeader>
  );
};

export default Header;
