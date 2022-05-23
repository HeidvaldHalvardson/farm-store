import React from "react";
import { StyledButton } from "./styled";

const Button = ({ children, link, maxWidth, onClick, ...props }) => {
  return (
    <StyledButton
      {...props}
      maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
