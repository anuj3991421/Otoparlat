import React from "react";
import { Route, Switch } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";

import { pageRoutes } from "../../routes";

class ManagePages extends React.Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={`/dashboard${prop.layout}`+prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };
  

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
              <Switch>{this.getRoutes(pageRoutes)}</Switch>
          </Row>
        </Container>
      </>
    );
  }
}

export default ManagePages;
