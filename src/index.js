import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import "./assets/scss/argon-dashboard-react.scss";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import { PersistGate } from "redux-persist/integration/react";
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import Store, { persistor } from "./lib/Store/Store";

ReactDOM.render(
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <Switch>
              <Route path="/auth" render={props => <AuthLayout {...props} />} />
              <Route path="/dashboard" render={props => <DashboardLayout {...props} />} />
              <Redirect from="/" to="/auth/login" />
            </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  document.getElementById("root")
);
