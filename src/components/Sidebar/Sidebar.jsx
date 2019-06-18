import React from "react";
import {Navbar, Container, Nav, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Media, NavItem,
    NavLink, NavbarBrand, Collapse, UncontrolledCollapse
} from "reactstrap";
import { Link, NavLink as NavLinkRRD } from "react-router-dom";
import {connect} from "react-redux";

class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false
        }
    }

    // toggles collapse between opened and closed (true/false)
    toggleCollapse = () => {
        this.setState({
        collapseOpen: !this.state.collapseOpen
        })
    };

    // closes the collapse
    closeCollapse = () => {
        this.setState({
        collapseOpen: false
        });
    };

    // creates the links that appear in the left menu / Sidebar
    createLinks = (routes,parent_layout) => {
        return routes.map((prop, key) => {
            if(prop.name == 'Profile'){
                return null;
            }

            if(prop.child == null){
                return (
                    <NavItem key={parent_layout+key}>
                        <NavLink
                            to={parent_layout+prop.layout + prop.path}
                            tag={NavLinkRRD}
                            onClick={this.closeCollapse}
                            activeClassName="active"
                        >
                            <i className={prop.icon} />
                            {prop.name}
                        </NavLink>
                    </NavItem>
                );
            } else {
                return (
                    <NavItem key={key}>
                      <NavLink
                        id={prop.id}
                        style={{cursor:'pointer'}}
                      >
                        <i className={prop.icon} />
                        {prop.name}
                      </NavLink>
                      <UncontrolledCollapse toggler={'#'+prop.id} >
                        <ul className="nav submenu">
                          {this.createLinks(prop.child,prop.layout)}
                        </ul>
                      </UncontrolledCollapse>
                    </NavItem>
                );
            }
        });
    };

    render() {
        const {routes, logo} = this.props;
        let navbarBrandProps;
        if (logo && logo.innerLink) {
            navbarBrandProps = {
                to: logo.innerLink,
                tag: Link
            };
        } else if (logo && logo.outterLink) {
            navbarBrandProps = {
                href: logo.outterLink,
                target: "_blank"
            };
        }
        return(
            <Navbar className="navbar-vertical fixed-left navbar-light bg-white" expand="md" id="sidenav-main">
                <Container fluid>
                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Brand */}
                    {logo ? (
                        <NavbarBrand className="pt-0" {...navbarBrandProps}>
                            <span>Otoparlat</span>
                        </NavbarBrand>
                    ) : null}
                    
                    {/* Collapse */}
                    <Collapse navbar isOpen={this.state.collapseOpen}>
                        {/* Navigation */}
                        <Nav navbar>{this.createLinks(routes, '')}</Nav>
                    </Collapse>

                </Container>
            </Navbar>
        )
    }
}

export default Sidebar;
// const mapStateToProps = (state) =>({
//   ...state
// })

// const mapDispatchToProps = (dispatch) =>({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
  