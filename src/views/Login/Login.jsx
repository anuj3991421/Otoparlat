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

import { loginUser } from "../../lib/Action/Login";
import Rules from "../../lib/Rules/FormRules.js";
import FormValidator from "../../lib/Rules/FormValidator"; 
import InputError from "../../components/Elements/InputError";

class Login extends React.Component {

  constructor(props){
    super(props);

    this.validator = new FormValidator(Rules.login);

    this.state = {
      email : '',
      password: '',
      err:false,
      loginsuccess:false,
      message:'',
      remember:'',
      showPasword:false,
      validation: this.validator.valid(),
    }

    this.formsubmitted = false;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {email , password, remember} = this.state;
    const validation = this.validator.validate(this.state);
    this.setState({ validation,isLoading:true });
    
    if(validation.isValid){
      // this.props.loginUser('email@email.com', '12345678');
      this.props.history.push("/dashboard/customer-list");
    } else {
      this.setState({ isLoading:false });
    }
  }

  onChange = (e) => {
    const {name, value} = e.target;
    if(name == "remember") {
      let {remember} = this.state;
      remember = !remember;
      this.setState({remember})
    } else {
      this.setState({[name]: value});
    }
  }

  togglePassword(e){
    e.preventDefault();
    let {showPasword} = this.state;
      showPasword = !showPasword;
    this.setState({showPasword})
  }

  render() {

    let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

    const {showPasword} = this.state;

    return (
      <>
        <Col lg="5" md="7">
          <div className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4" style={{fontSize: 20}}>
                <span>Sign In</span>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" onChange={this.onChange.bind(this)} />
                  </InputGroup>
                  <InputError show={validation.email.isValid} message={validation.email.message} />
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type={showPasword?'text':'password'} name="password" onChange={this.onChange.bind(this)} />
                    <InputGroupAddon addonType="append">
                      <a href onClick={this.togglePassword.bind(this)}>
                        <InputGroupText  style={{height:'100%'}}><i className={!showPasword?'fas fa-eye-slash':'fas fa-eye'}></i></InputGroupText>
                      </a>
                    </InputGroupAddon>
                  </InputGroup>
                  <InputError show={validation.password.isValid} message={validation.password.message} />
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    name="remember"
                    onChange={this.onChange.bind(this)}
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

const mapStateToProps = (state) =>({
  ...state
})

const mapDispatchToProps = (dispatch) =>({
  loginUser: (email, password) => dispatch(loginUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
