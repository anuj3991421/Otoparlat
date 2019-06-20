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
    Col,
    Container,
    Table,
    Modal,
    ModalHeader,
    ModalBody,  
    Label
} from "reactstrap";
import Switch from "react-switch";
import Header from "../../components/Headers/Header";


class Admin extends React.Component {

    constructor() {
        super();
        this.state = { 
            checked: false ,
            carModal: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    addCar(){
        this.setState(prevState => ({
            carModal: !prevState.carModal
        }));
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    onSubmit = (e) => {
        this.addCar();
    }

    render(){

        const { carModal } = this.state;

        return(
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row>
                                        <div className="col-6">
                                            <Input style={{width: '50%'}} type="text" placeholder="Search" />
                                        </div>
                                        <div className="col-6" style={{textAlign: 'end'}}>
                                            <Button onClick={(e) => this.addCar()} color="primary">Add Car</Button>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Car Name</th>
                                            <th scope="col">Car Number</th>
                                            <th scope="col">Car Colour</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" style={{textAlign: 'center'}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Anılcan</td>
                                            <td>ERCİYES</td>
                                            <td>5307833720</td>
                                            <td>
                                                <Switch
                                                    checkedIcon
                                                    uncheckedIcon
                                                    onChange={this.handleChange} checked={this.state.checked}
                                                />
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <i onClick={(e) => this.addCar()} style={{color: '#449d44'}} className="fa fa-edit mr-2"></i>
                                                <i style={{color: '#c9302c'}} className="fa fa-times"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>extensive</td>
                                            <td>Transparent</td>
                                            <td>5336016868</td>
                                            <td>
                                                <Switch
                                                    checkedIcon=''
                                                    uncheckedIcon=''
                                                    onChange={this.handleChange} checked={this.state.checked}
                                                />
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <i onClick={(e) => this.addCar()} style={{color: '#449d44'}} className="fa fa-edit mr-2"></i>
                                                <i style={{color: '#c9302c'}} className="fa fa-times"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>

                <Modal size="lg" isOpen={carModal} toggle={(e) => this.addCar()} className={this.props.className}>
                    <ModalHeader toggle={(e) => this.addCar()}><span style={{fontSize: 20}}> Add Car </span></ModalHeader>
                    <ModalBody>
                        <Form role="form">
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="price">First Name</Label>
                                        <Input type="text" name="first_name" id="first_name" placeholder="First Name"  onChange={this.onChange.bind(this)} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="price">Last Name</Label>
                                        <Input type="text" name="last_name" id="last_name" placeholder="Last Name"  onChange={this.onChange.bind(this)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="price">Email</Label>
                                        <Input type="text" name="email" id="email" placeholder="Email"  onChange={this.onChange.bind(this)} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="price">Phone Number</Label>
                                        <Input type="text" name="phone_number" id="phone_number" placeholder="Phone Number"  onChange={this.onChange.bind(this)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div className="text-center" onClick={this.onSubmit.bind(this)}>
                                <Button color="primary" type="button">Save Admin</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Admin;