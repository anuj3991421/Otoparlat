import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import AuthNavbar from "../components/Navbars/AuthNavbar";

import {loginRoutes} from "../routes";

class Auth extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-image");
  }
  // componentWillUnmount() {
  //   document.body.classList.remove("bg-image");
  // }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="main-content loginPage">
          <AuthNavbar />
          <div className="py-7"></div>
          <Container className="mt--7 pb-5">
            <Row className="justify-content-center">
              <Switch>{this.getRoutes(loginRoutes)}</Switch>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Auth;
