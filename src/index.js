import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux"; //provider
import { createStore } from "redux";
import reducer from "./reducers";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
