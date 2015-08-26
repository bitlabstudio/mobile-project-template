import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import _ from "lodash";

import * as theme from "../constants/theme.js";
import * as types from "../constants/actions.js";
import Title from "../framework/Title.jsx";
import request from "../api.js";

const initialState = {
  modalActive: false,
  isLoadingVersion: false,
  version: null
};

export function reducer(state=initialState, action) {
  switch (action.type) {
    case types.GET_VERSION:
      return { ...state, isLoadingVersion: true };

    case types.GET_VERSION_SUCCESS:
      return { ...state,
        isLoadingVersion: initialState.isLoadingVersion,
        version: action.res.CURRENT_VERSION
      };

    case types.GET_VERSION_ERROR:
      return { ...state,
        isLoadingVersion: initialState.isLoadingVersion,
        version: "ERROR"
      };

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

function getVersion() {
  return (dispatch) => {
    dispatch({type: types.GET_VERSION});
    setTimeout(function () {
      request({
        url: "version",
        method: "get",
        success: (res) => dispatch({
          type: types.GET_VERSION_SUCCESS, res: res}),
        error: (res) => dispatch({
          type: types.GET_VERSION_ERROR, res: res}),
        dispatch: dispatch
      });
    }, 1000);
  };
}

@connect(state => ({
  viewState: state.viewMyComponent
}))
@Radium
export default class MyComponent extends React.Component {
  componentWillMount() {
    let { dispatch, location } = this.props;
    let isActive = _.startsWith(location.pathname, "/");
    console.log(isActive);
    dispatch(getVersion());
  }

  handleClick() {
    this.props.dispatch({type: types.FOOBAR_CLICK});
  }

  render() {
    let { isActive, viewState } = this.props;
    let { isLoadingVersion, version } = viewState;
    let title = "Hello";

    return (
      <div
        style={[
          styles.base,
          isActive && theme.Active
      ]}>
        <Title styles={theme.titleOverride}>{title}</Title>
        {isLoadingVersion &&
          <p>Loading..</p>
        }
        {!isLoadingVersion &&
          <p>{version}</p>
        }
        <button onClick={() => this.handleClick()}>Foobar</button>
        {viewState.modalActive &&
          <div>MODAL</div>
        }
        {this.props.children}
      </div>
    );
  }
}
