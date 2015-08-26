import React from "react";
import { Router, Route } from "react-router";
import { history } from "react-router/lib/HashHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import * as app from "./index.js";
import * as reducers from "./reducers.js";

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunk)(createStore);
const redux = finalCreateStore(reducer, {});

const routes = (
  <Route component={app.Views.App}>
    <Route path="/" component={app.Views.MyComponent}>
      <Route path="inner" component={app.Views.InnerComponent} />
    </Route>
    <Route path="/other" component={app.Views.OtherComponent} />
  </Route>
);

const element = (
  <Provider store={redux}>
    {() => <Router history={history} children={routes}/> }
  </Provider>
);

let container = document.createElement("div");
document.body.appendChild(container);
React.render(element, container);
