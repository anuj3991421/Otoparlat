import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import Rules from "../../lib/Rules/FormRules.js";
import FormValidator from "../../lib/Rules/FormValidator"; 
import InputError from "../../components/Elements/InputError";

class ForgetPassword extends React.Component {

  constructor(props){
    super(props);

    this.validator = new FormValidator(Rules.forgotpassword);

    this.state = {
      email : '',
      err:false,
      message:'',
      validation: this.validator.valid(),
    }
    this.formsubmitted = false;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {email} = this.state;
    const validation = this.validator.validate(this.state);
    this.setState({ validation,isLoading:true });
    
    if(validation.isValid){
      // this.props.loginUser('email@email.com', '12345678');
      this.props.history.push("/auth/login");
    } else {
      this.setState({ isLoading:false });
    }
  }

  onChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {

    const {validation} = this.state;

    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent" style={{padding:0}}>
              <div className="text-muted text-center mt-2 mb-3">
                <small style={{fontSize:20}}>Forgot password</small>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" onChange={this.onChange.bind(this)} required />
                  </InputGroup>
                  <InputError show={validation.email.isValid} message={validation.email.message} />
                </FormGroup>
                <div className="text-muted font-italic">
                    <small>
                       An email with password reset link will be sent to the above given email
                    </small>
                </div>
                <div className="text-muted">
                    <Link to="/admin/index">
                        <small>
                            I remember my password
                        </small>
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/admin/index">
                        <Button className="my-4" color="primary" type="button" onClick={this.onSubmit.bind(this)}>
                            Send Email
                        </Button>
                    </Link>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default ForgetPassword;
