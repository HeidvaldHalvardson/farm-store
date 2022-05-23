import React from "react";
import { GlobalStyle } from "./styled";

import PageWrapper from "../layots/page-wrapper/page-wrapper";
import featuresList from "../../mock/featuresList";
import products from "../../mock/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollTop from "../ui/scroll-top/scroll-top";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage features={featuresList} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.BUY}>
            <PageWrapper pageUrl={AppRoute.BUY}>
              <BuyPage products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
