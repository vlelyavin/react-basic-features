import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

import logger from "redux-logger";
import { Provider } from "react-redux";
import reducerFunc from "./reducers/reducer";

const store = createStore(reducerFunc);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
