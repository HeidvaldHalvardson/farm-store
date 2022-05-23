import React from "react";

import Button from "../../ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить
      </Button>
    )
  }
];

const Nav = ({ pageUrl }) => {
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
};

export default Nav;
