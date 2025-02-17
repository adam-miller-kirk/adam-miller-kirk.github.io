import React from "react";
import { StoreProvider } from "easy-peasy";
import { Route, Switch, Link } from "wouter";
import { store } from "../store";

import Title from ".@/components/title";
import TableContents from ".@/components/tableContents";
import FirstPage from ".@/layout/home";
import SkillsPage from ".@/layout/skills";
import rolesPage from ".@/layout/roles";
import ThirdPage from ".@/layout/help";
import ErrorPage from ".@/layout/error";

const Routes = () => {
  return (
    <div className="App">
      <Title name="Adam Miller-Kirk" />
      <TableContents />
      <StoreProvider store={store}>
        <Switch>
          <Route path="/skills" component={SkillsPage} />
          <Route path="/roles" component={rolesPage} />
          <Route path="/help" component={ThirdPage} />
          <Route path="/*" component={ErrorPage} />
          <Route component={FirstPage} />
        </Switch>
      </StoreProvider>
    </div>
  );
};

export default Routes;
