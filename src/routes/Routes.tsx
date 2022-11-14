import React from "react";
import { StoreProvider } from "easy-peasy";
import { Route, Switch, Link } from "wouter";
import { store } from "../store";

import Title from ".@/components/title/Title";
import TableContents from ".@/components/tableContents/TableContents";
import FirstPage from ".@/layout/Home";
import SkillsPage from ".@/layout/Skills";
import DetailsPage from ".@/layout/Details";
import ThirdPage from ".@/layout/Help";
import ErrorPage from ".@/layout/Error";

const Routes = () => {
  return (
    <div className="App">
      <Title name="Demonstration App" />
      <TableContents />
      <StoreProvider store={store}>
        <Switch>
          <Route path="/skills" component={SkillsPage} />
          <Route path="/details" component={DetailsPage} />
          <Route path="/help" component={ThirdPage} />
          <Route path="/*" component={ErrorPage} />
          <Route component={FirstPage} />
        </Switch>
      </StoreProvider>
    </div>
  );
};

export default Routes;
