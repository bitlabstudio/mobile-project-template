import React from "react";
import Radium from "radium";
import { connect } from "react-redux";

import * as theme from "../constants/theme.js";
import * as types from "../constants/actions.js";

const initialState = {
  modalActive: false
};

export function reducer(state=initialState, action) {
  switch (action.type) {
    case types.FOOBAR_CLICK:
      return { ...state, modalActive: !state.modalActive };
    default:
      return state;
  }
}

const styles = {
  base: {
    backgroundColor: "gray",
    color: theme.COLOR_PRIMARY
  }
};

@connect(state => ({
  viewState: state.viewMyComponent
}))
@Radium
export default class MyComponent extends React.Component {
  handleClick() {
    this.props.dispatch({type: types.FOOBAR_CLICK});
  }

  render() {
    let { isActive, viewState } = this.props;
    let title = "Hello";

    return (
      <div
        style={[
          styles.base,
          isActive && theme.Active
      ]}>
        <span>{title}</span>
        <button onClick={() => this.handleClick()}>Foobar</button>
        {viewState.modalActive &&
          <div>MODAL</div>
        }
        {this.props.children}
      </div>
    );
  }
}
