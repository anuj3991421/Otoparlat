import React from "react";
import {connect} from "react-redux";
// reactstrap components
import {Container, Row, Col, Card, CardHeader} from "reactstrap";
import Header from "../components/Headers/Header";

class Index extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* <Row>
                        <Col className="mb-5 mb-xl-0" xl="8">
                            <Card className="bg-gradient-default shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                        <h6 className="text-uppercase text-light ls-1 mb-1">
                                            Overview
                                        </h6>
                                        <h2 className="text-white mb-0">Total orders</h2>
                                        </div>
                                    </Row>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row> */}
                </Container>
            </>
        )
    }
}

export default Index;

// const mapStateToProps = (state) =>({
//   ...state
// })

// const mapDispatchToProps = (dispatch) =>({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Index);