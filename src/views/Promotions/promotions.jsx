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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../components/Headers/Header";

import Rules from "../../lib/Rules/FormRules.js";
import FormValidator from "../../lib/Rules/FormValidator"; 
import InputError from "../../components/Elements/InputError";


class Promotions extends React.Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator(Rules.addPromotion);

        this.state = {
          promotionModal: false,
          startDate: new Date(),
          endDate: new Date(),
          promotion_type: '',
          price: '',
          benefits: '',
          generated_code: '',
          pcode: '',
          validation: this.validator.valid(),
        };

        this.formsubmitted = false;

        this.startDateChange = this.startDateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this);
    }

    addPromotion() {
        this.setState(prevState => ({
            promotionModal: !prevState.promotionModal
        }));
    } 

    startDateChange(date) {
        this.setState({
          startDate: date
        });
    }

    endDateChange(date) {
        this.setState({
          endDate: date
        });
    }

    changeType = (e) => {
        this.setState({
            promotion_type: e.target.value
        });
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {price , benefits, generated_code, pcode} = this.state;
        const validation = this.validator.validate(this.state);
        this.setState({ validation,isLoading:true });
        console.log(validation);
        if(validation.isValid){
            this.addPromotion();
            this.setState(
                {
                    price: '',
                    benefits: '',
                    generated_code: '',
                    pcode: ''
                }
            );
        } else {
          this.setState({ isLoading:false });
        }
    }

    render(){

        const {promotionModal, promotion_type, validation} = this.state;

        return(
            <>
                <Header />

                <Container className="mt--7" fluid>
                    <Button className="pull-right" color="primary" style={{float:'right'}} size="sm" onClick={(e) => this.addPromotion()}>
                        Add Promotion
                    </Button>
                </Container>

                {/* Page content */}
                <Container className="mt-5" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row>
                                        <Col sm={6}>
                                            <h3 className="mb-0">Promotion Type 1</h3>
                                            <p style={{fontSize: 14}}>
                                                This is the type of promotion that each user can only use once.
                                            </p>
                                        </Col>
                                        {/* <Col sm={6}>
                                            <Button className="pull-right" color="primary" style={{float:'right'}} size="sm" onClick={(e) => this.addPromotion(1, e)}>
                                                Add Promotion
                                            </Button>
                                        </Col> */}
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Starting date</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Promotional Code</th>
                                            <th scope="col">Coupon Usage Status</th>
                                            <th scope="col">Clear</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>

                <Container className="mt-3" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row>
                                        <Col sm={6}>
                                            <h3 className="mb-0">Promotion Type 2</h3>
                                            <p style={{fontSize: 14}}>
                                                It is the type of promotion that each user can use more than once.
                                            </p>
                                        </Col>
                                        {/* <Col sm={6}>
                                            <Button className="pull-right" color="primary" style={{float:'right'}} size="sm" onClick={(e) => this.addPromotion(2, e)}>Add Promotion</Button>
                                        </Col> */}
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Starting date</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Promotional Code</th>
                                            <th scope="col">Coupon Usage Status</th>
                                            <th scope="col">Clear</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2018-10-23 00:00:00</td>
                                            <td>2018-12-31 00:00:00</td>
                                            <td>10 ₺</td>
                                            <td>DHA</td>
                                            <td>0/2000</td>
                                            <td><a>Clear</a></td>
                                        </tr>
                                        <tr>
                                            <td>2018-11-01 00:00:00</td>
                                            <td>2018-12-31 00:00:00</td>
                                            <td>10 ₺</td>
                                            <td>BORUSAN</td>
                                            <td>0/5000</td>
                                            <td><a>Clear</a></td>
                                        </tr>
                                        <tr>
                                            <td>2018-11-23 00:00:00</td>
                                            <td>2019-05-31 00:00:00</td>
                                            <td>10 ₺</td>
                                            <td>PTS</td>
                                            <td>4/1000</td>
                                            <td><a>Clear</a></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>

                <Container className="mt-3" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row>
                                        <Col sm={6}>
                                            <h3 className="mb-0">Promotion Type 3</h3>
                                            <p style={{fontSize: 14}}>
                                                It is the type of promotion where only the users who know the code can use 1 code and 1 promotion.
                                            </p>
                                        </Col>
                                        {/* <Col sm={6}>
                                            <Button className="pull-right" color="primary" style={{float:'right'}} size="sm" onClick={(e) => this.addPromotion(3, e)}>Add Promotion</Button>
                                        </Col> */}
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Starting date</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Promotional Code</th>
                                            <th scope="col">Coupon Usage Status</th>
                                            <th scope="col">Download</th>
                                            <th scope="col">Clear</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2018-10-23 00:00:00</td>
                                            <td>2018-12-31 00:00:00</td>
                                            <td>10 ₺</td>
                                            <td>dsmartxxxxxx</td>
                                            <td>0/2000</td>
                                            <td>Download</td>
                                            <td><a>Clear</a></td>
                                        </tr>
                                        <tr>
                                            <td>2018-11-01 00:00:00</td>
                                            <td>2018-12-31 00:00:00</td>
                                            <td>10 ₺</td>
                                            <td>instagramxxxxxx</td>
                                            <td>0/5000</td>
                                            <td>Download</td>
                                            <td><a>Clear</a></td>
                                        </tr>
                                        <tr>
                                            <td>2018-11-23 00:00:00</td>
                                            <td>2019-05-31 00:00:00</td>
                                            <td>10 ₺</td>
                                            <td>mynetxxxxxx</td>
                                            <td>4/1000</td>
                                            <td>Download</td>
                                            <td><a>Clear</a></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>

                <Modal size="lg" isOpen={promotionModal} toggle={(e) => this.addPromotion()} className={this.props.className}>
                    <ModalHeader toggle={(e) => this.addPromotion()}><span style={{fontSize: 20}}> Add Promotion </span></ModalHeader>
                    <ModalBody>
                        <Form role="form">
                            <Input type="select" onChange={this.changeType.bind(this)}>
                                <option value="">Select Promotion Type</option>
                                <option value="1">Promotion Type 1</option>
                                <option value="2">Promotion Type 2</option>
                                <option value="3">Promotion Type 3</option>
                            </Input>
                            { (this.state.promotion_type) && 
                                <div className="mt-3">
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="price">Price</Label>
                                                <Input type="text" name="price" id="price" placeholder="How Many TL Promotion"  onChange={this.onChange.bind(this)} />
                                                <InputError show={validation.price.isValid} message={validation.price.message} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup style={{display: 'grid'}} className="datePickerDiv">
                                                <Label for="examplePassword">Start</Label>
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.startDateChange}
                                                    className="form-control"
                                                    popperPlacement="bottom"
                                                    
                                                    popperModifiers={{
                                                        flip: {
                                                            behavior: ["bottom"] // don't allow it to flip to be above
                                                        },
                                                        preventOverflow: {
                                                            enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                                        },
                                                        hide: {
                                                            enabled: false // turn off since needs preventOverflow to be enabled
                                                        }
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup style={{display: 'grid'}} className="datePickerDiv">
                                                <Label for="examplePassword">Finish</Label>
                                                <DatePicker
                                                    selected={this.state.endDate}
                                                    onChange={this.endDateChange}
                                                    className="form-control"
                                                    popperPlacement="bottom"
                                                    popperModifiers={{
                                                        flip: {
                                                            behavior: ["bottom"] // don't allow it to flip to be above
                                                        },
                                                        preventOverflow: {
                                                            enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                                        },
                                                        hide: {
                                                            enabled: false // turn off since needs preventOverflow to be enabled
                                                        }
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        { (this.state.promotion_type == 1 || this.state.promotion_type == 2) && 
                                            <FormGroup>
                                                <Label for="benefits">How Many Benefits</Label>
                                                <Input type="text" name="benefits" id="benefits" placeholder="How many times can you benefit" onChange={this.onChange.bind(this)} />
                                                <InputError show={validation.benefits.isValid} message={validation.benefits.message} />
                                            </FormGroup>
                                        }
                                        { (this.state.promotion_type == 3) && 
                                            <FormGroup>
                                                <Label for="benefits">Prefix</Label>
                                                <Input type="text" name="prefix" id="prefix`" placeholder="What should the code start with?" />
                                            </FormGroup>
                                        }
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            { (this.state.promotion_type == 1 || this.state.promotion_type == 2) && 
                                                <FormGroup>
                                                    <Label for="pcode">Promotional Code</Label>
                                                    <Input type="text" name="pcode" id="pcode" placeholder="Promotional Code" onChange={this.onChange.bind(this)} />
                                                    <InputError show={validation.pcode.isValid} message={validation.pcode.message} />
                                                </FormGroup>
                                            }
                                            { (this.state.promotion_type == 3) && 
                                                <FormGroup>
                                                    <Label for="benefits">How many codes are generated</Label>
                                                    <Input type="text" name="generated_code" id="generated_code`" placeholder="Example: 100" onChange={this.onChange.bind(this)} />
                                                    <InputError show={validation.generated_code.isValid} message={validation.generated_code.message} />
                                                </FormGroup>
                                            }
                                        </Col>
                                    </Row>
                                    <div className="text-center" onClick={this.onSubmit.bind(this)}>
                                        <Button color="primary">Save Promotion</Button>
                                    </div>
                                </div>
                            }
                                    
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Promotions;