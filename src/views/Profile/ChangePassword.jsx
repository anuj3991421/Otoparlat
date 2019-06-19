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

class ChangePassword extends React.Component {
    render(){
        return(
            <>
                <Col sm="12" md="12">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="8">
                                <h3 className="mb-0">Change password</h3>
                                </Col>
                                <Col className="text-right" xs="4">
                                <Link to="/dashboard/profile/user-profile">
                                    <Button
                                        color="primary"
                                        size="sm"
                                    >
                                        My profile
                                    </Button>
                                </Link>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <Form role="form">
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <Input placeholder="New password" 
                                            name="password" 
                                            type="password"
                                        />
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-eye-slash"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <Input placeholder="Confirm password" 
                                            name="confirm_password" 
                                            type="password"
                                        />
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-eye-slash"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center mt-3">
                                    <Button color="primary" type="button">Submit</Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </>
        )
    }
}

export default ChangePassword;