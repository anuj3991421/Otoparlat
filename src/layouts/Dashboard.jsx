import React from "react";
import { Route, Switch } from "react-router-dom";
// core components

import DashboardNavbar from "../components/Navbars/DashboardNavbar";
import Sidebar from "../components/Sidebar/Sidebar";

import {connect} from "react-redux";
import { Container, Row } from "reactstrap";
import {dashboardRoutes, profileRoutes} from "../routes";

class Dashboard extends React.Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
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

  getBrandText = path => {

    let allroutes = [
      dashboardRoutes,
      profileRoutes
    ];
    for(let j = 0; j< allroutes.length; j++){
      for (let i = 0; i < allroutes[j].length; i++) {
        let index = this.props.location.pathname.indexOf(allroutes[j][i].layout + allroutes[j][i].path);
        if ( index !== -1) {
          return allroutes[j][i].name;
        }
      }
    }
    return "Brand";
  };

  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={dashboardRoutes}
          logo={{
            innerLink: "/dashboard/customer-list",
          }}
        />
        <div className="main-content" ref="mainContent">
          <DashboardNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(dashboardRoutes)}</Switch>
        </div>
      </>
    );
  }
}

export default Dashboard;

// const mapStateToProps = (state) =>({
//   ...state
// })

// const mapDispatchToProps = (dispatch) =>({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
