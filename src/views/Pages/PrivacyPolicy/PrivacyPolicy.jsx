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

class PrivacyPolicy extends React.Component {
    render(){
        return (
            <>
                {/* Page content */}
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">Privacy Policy and KVKK Agreement</h3>
                        </CardHeader>
                        <CKEditor
                            data='<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Privacy Policy and KVKK Agreement</font></font></strong></p>'
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

export default PrivacyPolicy;