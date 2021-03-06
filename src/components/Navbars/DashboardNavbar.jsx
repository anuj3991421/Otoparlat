import React from "react"; 
import { Link } from "react-router-dom";
import {connect} from "react-redux";
// reactstrap components
import {Navbar, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Nav, UncontrolledDropdown, DropdownToggle,
    Media, DropdownMenu, DropdownItem} from "reactstrap";
    
class DashboardNavbar extends React.Component {

    logout = () => {
        this.props.history.push("/auth/login");
    }

    render() {
        return (
            <>
                <Navbar className="navbar-top navbar-dark"expand="md" id="navbar-main">
                    <Container fluid>
                        <Link
                            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                            to="/"
                        >
                            {this.props.brandText}
                        </Link>
                        {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <FormGroup className="mb-0">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Search" type="text" />
                                </InputGroup>
                            </FormGroup>
                        </Form> */}
                        <Nav className="align-items-center d-none d-md-flex" navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle className="pr-0" nav>
                                    <Media className="align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                        <img
                                            alt="..."
                                            src={require("../../assets/img/theme/avatar.png")}
                                        />
                                        </span>
                                        <Media className="ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm font-weight-bold">
                                            Test User
                                        </span>
                                        </Media>
                                    </Media>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                    <DropdownItem className="noti-title" header tag="div">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </DropdownItem>
                                    <DropdownItem to="/dashboard/profile/user-profile" tag={Link}>
                                        <i className="ni ni-single-02" />
                                        <span>My profile</span>
                                    </DropdownItem>
                                    <DropdownItem to="/dashboard/profile/change-password" tag={Link}>
                                        <i className="ni ni-support-16" />
                                        <span>Change Password</span>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="#pablo" onClick={this.logout}>
                                        <i className="ni ni-user-run" />
                                        <span>Logout</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default DashboardNavbar;

// const mapStateToProps = (state) =>({
//     ...state
// })
  
// const mapDispatchToProps = (dispatch) =>({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar);