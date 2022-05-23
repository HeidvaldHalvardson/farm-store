import React from "react";

import About from "../../blocks/about/about";
import Features from "../../blocks/features/features";

const MainPage = ({ features }) => {
  return (
    <>
      <About />
      <Features features={features} />
    </>
  );
};

export default MainPage;
