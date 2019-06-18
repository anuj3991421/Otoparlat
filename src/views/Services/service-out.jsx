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


class Services extends React.Component {
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
                                    <h3 className="mb-0">Service Requested Regions</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Coordinate</th>
                                            <th scope="col">History</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <span>58 433</span>
                                            </th>
                                            <td>21.949420963076,75.868759341538</td>
                                            <td>2019-06-13 13:24:06</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span>58 433</span>
                                            </th>
                                            <td>22.737801325258,75.893246065825</td>
                                            <td>2019-06-13 13:23:10</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span>59044</span>
                                            </th>
                                            <td>40.993920163333,29.245212022215</td>
                                            <td>2019-05-22 14:59:58</td>
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

export default Services;