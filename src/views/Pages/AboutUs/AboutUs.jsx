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
import CKEditor from 'ckeditor4-react';

class AboutUs extends React.Component {
    render(){
        return (
            <>
                {/* Page content */}
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">About Us</h3>
                        </CardHeader>
                        <CKEditor
                            data='<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OtoParlat mobile phone application by taking orders through the location of customers go to the vehicle cleaning without using water. </font><font style="vertical-align: inherit;">The pH of the specially developed solution for non-aqueous vehicle cleaning is neutral and provides extra lubricity while softening the dirt on the vehicle, preventing scratching of the vehicle.</font></font></p>'
                        />
                    </Card>
                    <div className="text-center mt-3">
                        <Button color="primary" type="button">Save</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutUs;