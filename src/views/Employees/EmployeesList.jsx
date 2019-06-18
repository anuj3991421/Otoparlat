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


class Employees extends React.Component {
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
                                    <h3 className="mb-0">Employees</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Surname</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Last Updated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <span>Enes</span>
                                            </th>
                                            <td>A.</td>
                                            <td>Sarıyer (Motorcycle) 2</td>
                                            <td>2019-01-22 06:52:16</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span>Contact</span>
                                            </th>
                                            <td>Sadık</td>
                                            <td>Kadıköy 3</td>
                                            <td>2019-01-22 06:52:19</td>
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

export default Employees;