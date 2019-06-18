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
    Table
  } from "reactstrap";

  import Header from "../../components/Headers/Header";


class Orders extends React.Component {
    render(){
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
                                    <h3 className="mb-0">Order List</h3>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Phone number" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Surname" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Vehicle Information" />
                                        </div>
                                        <div className="col-2">
                                        <Input type="select" name="selectbox" id="selectbox">
                                            <option>All Status</option>
                                            <option>Your order has been taken</option>
                                            <option>Order Completed</option>
                                            <option>It is cancelled</option>
                                            <option>Order Process</option>
                                        </Input>
                                        </div>
                                        <div className="col-2" style={{textAlign: 'center'}}>
                                            <Button color="primary">Search</Button>
                                        </div>
                                    </Row>
                                </CardBody>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Sipe. No.</th>
                                            <th scope="col">Telephone</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Surname</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Reza. The time</th>
                                            <th scope="col">Vehicle</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <span>2877</span>
                                            </th>
                                            <td>5334735823</td>
                                            <td>Gökberk</td>
                                            <td>Göktepe</td>
                                            <td>50 TL</td>
                                            <td>2019-05-22-17: 45</td>
                                            <td>Volkswagen - 34bvt396 - White</td>
                                            <td>Order Received</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span>2876</span>
                                            </th>
                                            <td>5301551903</td>
                                            <td>Kayhan</td>
                                            <td>Ulugöl</td>
                                            <td>$ 35</td>
                                            <td>2019-05-22-14: 00</td>
                                            <td>Mercedes - 34 NUL 07 - Gray</td>
                                            <td>Order Completed</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Orders;