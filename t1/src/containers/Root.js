import React, { Component } from "react";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { withRouter } from "react-router-dom";

import ConnectedRouter from "./../rrr/ConnectedRouter";
import configureStore from "../configureStore";
import MenuAppBar from "./MenuAppBar";

const history = createHistory();
const store = configureStore(history);
const Router = withRouter(MenuAppBar);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </Provider>
    );
  }
}
