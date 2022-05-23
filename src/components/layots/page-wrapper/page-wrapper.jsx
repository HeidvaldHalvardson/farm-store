import React from "react";
import { StyledPageWrapper } from "./styled";

import Header from "../header/header";
import Footer from "../footer/footer";

const PageWrapper = ({ children, pageUrl }) => {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <StyledPageWrapper>{children}</StyledPageWrapper>
      <Footer />
    </>
  );
};

export default PageWrapper;
