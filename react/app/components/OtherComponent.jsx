import React from "react";
import { connect } from "react-redux";

const initialState = {
  isLoading: false
};

export function reducer(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

@connect(state => ({
  viewState: state.viewOtherComponent
}))
export default class OtherComponent extends React.Component {
  render() {
    return (
      <div>Other</div>
    );
  }
}
