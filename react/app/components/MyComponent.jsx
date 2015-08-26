import React from "react";

export default class MyComponent extends React.Component {
  render() {
    let title = "Hello";

    return (
      <div>
        {title}
        {this.props.children}
      </div>
    );
  }
}
