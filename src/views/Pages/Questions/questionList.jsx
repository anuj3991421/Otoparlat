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
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container,
    Table
  } from "reactstrap";
import Header from "../../../components/Headers/Header";

class QuestionList extends React.Component {
    render(){
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
                                    <Button className="pull-right" color="primary" style={{float:'right'}} size="sm">
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
            </>
                    
        )
    }
}

export default QuestionList;