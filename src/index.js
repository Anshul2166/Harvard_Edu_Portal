import React from "react";
import ReactDOM from "react-dom";
import "./_index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "react-notifications/lib/notifications.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dropdown/style.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
