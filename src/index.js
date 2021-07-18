import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import { initFacebookSdk } from "./methods/initFacebokSdk";

initFacebookSdk().then(
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  )
);
