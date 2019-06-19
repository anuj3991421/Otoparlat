import React from "react"; 
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Label,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    Table
  } from "reactstrap";
import Header from "../../../components/Headers/Header";

class QuestionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionModal: false,
        };
    }

    addQuestion(){
        this.setState(prevState => ({
            questionModal: !prevState.questionModal
        }));
    }

    render(){

        const {questionModal} = this.state;

        return (
            <>
                {/* Page content */}
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <Row>
                                <Col sm={6}>
                                    <h3 className="mb-0">Frequently Asked Questions</h3>
                                </Col>
                                <Col sm={6}>
                                    <Button onClick={(e) => this.addQuestion()} className="pull-right" color="primary" style={{float:'right'}} size="sm">
                                        Asked Questions
                                    </Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                                <tr className="row m-0" >
                                    <th className="col-4">Title</th>
                                    <th className="col-4" >Detail</th>
                                    <th className="col-2" >Update</th>
                                    <th className="col-2" >Clear</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row m-0">
                                    <td className="col-4">What is OtoParlat?</td>
                                    <td className="col-4">High quality cleaning material</td>
                                    <td className="col-2">
                                        <Button style={{backgroundColor: '#449d44'}}>
                                            <i style={{color: '#fff'}} class="fa fa-edit"></i>
                                        </Button>
                                    </td>
                                    <td className="col-2">
                                        <Button style={{backgroundColor: '#c9302c'}}>
                                            <i style={{color: '#fff'}} class="fa fa-times"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr className="row m-0">
                                    <td className="col-4">Which Days Do You Work?</td>
                                    <td className="col-4">7 days 24 hours from our application</td>
                                    <td className="col-2">
                                        <Button style={{backgroundColor: '#449d44'}}>
                                            <i style={{color: '#fff'}} class="fa fa-edit"></i>
                                        </Button>
                                    </td>
                                    <td className="col-2">
                                        <Button style={{backgroundColor: '#c9302c'}}>
                                            <i style={{color: '#fff'}} class="fa fa-times"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr className="row m-0">
                                    <td className="col-4">Are Your Employees Who Come to Wash?</td>
                                    <td className="col-4">Yes, experienced car wash</td>
                                    <td className="col-2">
                                        <Button style={{backgroundColor: '#449d44'}}>
                                            <i style={{color: '#fff'}} class="fa fa-edit"></i>
                                        </Button>
                                    </td>
                                    <td className="col-2">
                                        <Button style={{backgroundColor: '#c9302c'}}>
                                            <i style={{color: '#fff'}} class="fa fa-times"></i>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </div>

                <Modal size="lg" isOpen={questionModal} toggle={(e) => this.addQuestion()} className={this.props.className}>
                    <ModalHeader toggle={(e) => this.addQuestion()}><span style={{fontSize: 20}}> Frequently Asked Questions </span></ModalHeader>
                    <ModalBody>
                        <Form role="form">

                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Write a Title"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="explanation">Explanation</Label>
                                <Input type="textarea" name="explanation" id="explanation" placeholder="Write Description" />
                            </FormGroup>

                            <div className="text-center">
                                <Button color="primary" type="button">Save New Frequently Asked Questions</Button>
                            </div>
                                    
                        </Form>
                    </ModalBody>
                </Modal>
            </>
                    
        )
    }
}

export default QuestionList;