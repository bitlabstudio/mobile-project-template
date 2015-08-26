import React from "react";

let foo;

export default class MyComponent extends React.Component {
  render() {
    let title = "Hello";
    
    return (
      <div>{title}</div>
    );
  }
}
