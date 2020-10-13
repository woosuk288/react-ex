import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="*">
            <AppLayout>
              <Route exact path="/" component={Home} />
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
