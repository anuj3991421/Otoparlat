import React from 'react';
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
} from "reactstrap";
import Header from "../../components/Headers/Header";

import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

const MapWithAMarker = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs, 
    withGoogleMap)(props => {
    return (
        <GoogleMap defaultZoom={5} defaultCenter={{ lat: 28.0426,  lng: 40.96331 }}>
            {props.markers.map(marker => {
                console.log(marker);
                return (
                    <Marker
                        position={{ lat: marker[0], lng: marker[1] }}
                    >   
                    </Marker>
                )
        })}
        </GoogleMap>
    )
})

class Cities extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cityModal: false,
            coordinates: ''
        }
    }

    addCity = () => {
        this.setState(prevState => ({
            cityModal: !prevState.cityModal
        }));
        this.setState({
            selectedMarker: false,
            coordinates: [ 
                [
                    28.0426, 
                    40.96331
                ], 
                [
                    28.43508, 
                    41.62113
                ], 
                [
                    30.10254, 
                    41.43861
                ], 
                [
                    29.46676, 
                    40.65457
                ], 
                [
                    28.0426, 
                    40.96331
                ]
            ]
            
        });
    }

    render(){

        const { cityModal } = this.state;

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
                                    <h3 className="mb-0">Region List</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr className="row m-0">
                                            <th className="col-6">Region Name</th>
                                            <th className="col-3">Update Region</th>
                                            <th className="col-3">Delete Region</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row m-0">
                                            <th className="col-6">
                                                <span>Istanbul</span>
                                            </th>
                                            <td className="col-3">
                                                <Button  onClick={(e) => this.addCity()} style={{backgroundColor: '#449d44'}}>
                                                    <i style={{color: '#fff'}} className="fa fa-edit"></i>
                                                </Button>
                                            </td>
                                            <td className="col-3">
                                                <Button style={{backgroundColor: '#c9302c'}}>
                                                    <i style={{color: '#fff'}} className="fa fa-times"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>

                <Modal size="lg" isOpen={cityModal} toggle={(e) => this.addCity()} className={this.props.className}>
                    <ModalHeader toggle={(e) => this.addCity()}><span style={{fontSize: 20}}> Add City </span></ModalHeader>
                    <ModalBody>
                    <MapWithAMarker
                        selectedMarker={this.state.selectedMarker}
                        markers={this.state.coordinates}
                    />
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Cities;