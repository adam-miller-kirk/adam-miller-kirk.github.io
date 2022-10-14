import React from "react";
import { StoreProvider } from "easy-peasy";
import { Route, Switch, Link } from "wouter";
import { store } from "../store";

import Title from ".@/components/title/Title";
import TableContents from ".@/components/tableContents/TableContents";
import FirstPage from ".@/layout/Home";
import SecondPage from ".@/layout/Search";
import ThirdPage from ".@/layout/Help";
import ErrorPage from ".@/layout/Error";

const Routes = () => {
  return (
    <div className="App">
      <Title name="Weather App" />
      <TableContents />
      <StoreProvider store={store}>
        <Switch>
          <Route path="/search" component={SecondPage} />
          <Route path="/help" component={ThirdPage} />
          <Route path="/*" component={ErrorPage} />
          <Route component={FirstPage} />
        </Switch>
      </StoreProvider>
    </div>
  );
};

export default Routes;
