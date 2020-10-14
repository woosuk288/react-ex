import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";
import NomadMovie from "./views/NomadMovie";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="*">
            <AppLayout>
              <Route exact path="/" component={Home} />
              <Route exact path="/nomad-movie" component={NomadMovie} />
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
