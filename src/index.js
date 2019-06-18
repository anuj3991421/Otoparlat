import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/scss/argon-dashboard-react.scss";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/dashboard" render={props => <DashboardLayout {...props} />} />
          <Redirect from="/" to="/auth/login" />
        </Switch>
    </BrowserRouter>,
  document.getElementById("root")
);
