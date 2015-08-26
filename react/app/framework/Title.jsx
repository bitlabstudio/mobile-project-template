import React from "react";
import Radium from "radium";
import * as theme from "../constants/theme.js";

const styles = {
  base: {
    fontSize: `${theme.FONT_SIZE_HUGE}px`
  }
};

@Radium
export default class Title extends React.Component {
  static propTypes = {
    styles: React.PropTypes.object
  }

  render() {
    return (
      <h1
        style={[
          styles.base,
          this.props.styles
      ]}>
        {this.props.children}
      </h1>
    );
  }
}
