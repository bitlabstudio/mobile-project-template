import React from "react";

import MyComponent from "./components/MyComponent.jsx";

let container = document.createElement("div");
document.body.appendChild(container);
React.render(
  React.createElement(MyComponent), container);
