import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Profile extends React.Component {

  // constructor(props){
  //   super(props);
    
  //   this.state = {
  //       _id:props.location.state._id,
  //       firstname: props.location.state.firstname,
  //       lastname: props.location.state.lastname,
  //       phone: props.location.state.phone,
  //       email: props.location.state.email,
  //       password:props.location.state.password || 'dsdas',
  //       image:props.location.state.image,
  //       user:props.location.state,
  //       err:false,
  //       message:'',
  //       isLoading:false,
  //   };
  // }

  render() {
    // const {firstname,lastname,email,image,phone,user} = this.state;
    return (
      <>
        
          <Col sm="12" md="12">
            <div className="card-profile shadow2">
              <div className="card-profile-image2">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("../../assets/img/theme/avatar.png")}
                  />
                </a>
              </div>
            </div>
          </Col> 
          <Col sm="12" md="12">
            <div className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="test.user"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="test@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Test"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="User"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </div>
          </Col>
      </>
    );
  }
}

export default Profile;
