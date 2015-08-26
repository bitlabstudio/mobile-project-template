import React from "react";
import { Router, Route } from "react-router";
import { history } from "react-router/lib/HashHistory";

import * as app from "./index.js";

const routes = (
  <Route component={app.Views.App}>
    <Route path="/" component={app.Views.MyComponent}>
      <Route path="inner" component={app.Views.InnerComponent} />
    </Route>
    <Route path="/other" component={app.Views.OtherComponent} />
  </Route>
);

const element = (
  <Router history={history} children={routes} />
);

let container = document.createElement("div");
document.body.appendChild(container);
React.render(element, container);
