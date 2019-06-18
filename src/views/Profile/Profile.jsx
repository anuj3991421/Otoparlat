import React from "react";
import { Route, Switch } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
// core components
import UserHeader from "../../components/Headers/UserHeader";
import { profileRoutes } from "../../routes";

class Profile extends React.Component {

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
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
            <Row>
                <Switch>{this.getRoutes(profileRoutes)}</Switch>
            </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
