import React from "react";
import { Router, Route } from "react-router";
import { history } from "react-router/lib/HashHistory";

import App from "./components/App.jsx";
import MyComponent from "./components/MyComponent.jsx";
import OtherComponent from "./components/OtherComponent.jsx";
import InnerComponent from "./components/InnerComponent.jsx";

const routes = (
  <Route component={App}>
    <Route path="/" component={MyComponent}>
      <Route path="inner" component={InnerComponent} />
    </Route>
    <Route path="/other" component={OtherComponent} />
  </Route>
);

const element = (
  <Router history={history} children={routes} />
);

let container = document.createElement("div");
document.body.appendChild(container);
React.render(element, container);
