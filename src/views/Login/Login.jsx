import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

// import { loginUser } from "../../lib/action/login";

class Login extends React.Component {

  onSubmit = (e) => {
    // this.props.loginUser('email@email.com', '12345678');
    this.props.history.push("/dashboard/customer-list");
  }

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <div className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4" style={{fontSize: 20}}>
                <span>Sign In</span>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <Row className="mt-3">
                  <Col xs="6">
                    <Link to="/auth/forgotpassword" className="text-light">
                      <span className="align-middle text-muted">Forgot password?</span>
                    </Link>
                  </Col>
                  <Col xs="6">
                    <Button className="float-right" color="primary" type="button" onClick={this.onSubmit.bind(this)}>
                      Sign in
                    </Button>
                  </Col>
                </Row>
                {/* <div class="row mt-4">
                  <div class="col-sm-6">
                    <span class="d-inline-block align-middle text-muted">Forget Password?</span>
                  </div>
                  <div class="col-sm-6">
                    <Button className="float-right" color="primary" type="button" onClick={this.onSubmit.bind(this)}>
                      Sign in
                    </Button>
                  </div>
                </div> */}
              </Form>
            </CardBody>
          </div>
        </Col>
      </>
    );
  }
}

export default Login;

// const mapStateToProps = (state) =>({
//   ...state
// })

// const mapDispatchToProps = (dispatch) =>({
//   loginUser: (email, password) => dispatch(loginUser(email, password))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
