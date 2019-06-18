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


class Customers extends React.Component {
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
                                    <h3 className="mb-0">Customers List</h3>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Customer Number" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Surname" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-2" style={{textAlign: 'center'}}>
                                            <Button color="primary">Search</Button>
                                        </div>
                                    </Row>
                                </CardBody>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">M. No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Surname</th>
                                            <th scope="col">Phone NUmber</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Date of Registration</th>
                                            <th scope="col">Gender</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <span>51825</span>
                                            </th>
                                            <td>Anılcan</td>
                                            <td>ERCİYES</td>
                                            <td>5307833720</td>
                                            <td>aerciyes@ku.edu.t is</td>
                                            <td>1990-01-01</td>
                                            <td>2018-07-26 09:34:39</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span>51 822</span>
                                            </th>
                                            <td>extensive</td>
                                            <td>Transparent</td>
                                            <td>5336016868</td>
                                            <td>I enginsaydam@hotmail.co</td>
                                            <td>1991-10-15</td>
                                            <td>2018-07-25 12:05:27</td>
                                            <td>Male</td>
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

export default Customers;