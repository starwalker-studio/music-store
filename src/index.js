import React from "react";
import ReactDOM from "react-dom";
import "./scss/global.scss";
import App from "./App";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@sweetalert2/theme-dark/dark.css";

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
