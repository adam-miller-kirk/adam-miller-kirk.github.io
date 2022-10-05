import React from "react";
import { StoreProvider } from "easy-peasy";
import { Route, Switch, Link } from "wouter";
import { store } from "../store";

import FirstPage from ".@/layout/FirstPage";
import SecondPage from ".@/layout/SecondPage";
import ErrorPage from ".@/layout/ErrorPage";

const Routes = () => {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Switch>
          <Route path="/second" component={SecondPage} />
          <Route path="/*" component={ErrorPage} />
          <Route component={FirstPage} />
        </Switch>
      </StoreProvider>
    </div>
  );
};

export default Routes;
