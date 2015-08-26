import React from "react";
import Radium from "radium";

import * as theme from "../constants/theme.js";

const styles = {
  base: {
    backgroundColor: "gray",
    color: theme.COLOR_PRIMARY
  }
};

@Radium
export default class MyComponent extends React.Component {
  render() {
    let title = "Hello";

    return (
      <div
        style={[
          styles.base,
          this.props.isActive && theme.Active
      ]}>
        <span>{title}</span>
        {this.props.children}
      </div>
    );
  }
}
