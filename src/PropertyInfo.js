import React from 'react';
import { Card, CardTitle, Form, Row, Col, Label, Input } from 'reactstrap';

class PropertyInfo extends React.Component {
    render() {
        const zillowResponse = this.props.zillowResponse;
        let yearBuilt = "N/A";
        let finishedSqFt = "N/A";
        let bathrooms = "N/A";
        let bedrooms = "N/A";
        let zestimate = "N/A";
        if (zillowResponse.yearBuilt) yearBuilt = zillowResponse.yearBuilt._text;
        if (zillowResponse.finishedSqFt) finishedSqFt = zillowResponse.finishedSqFt._text;
        if (zillowResponse.bathrooms) bathrooms = zillowResponse.bathrooms._text;
        if (zillowResponse.bedrooms) bedrooms = zillowResponse.bedrooms._text;
        if (zillowResponse.zestimate) zestimate = zillowResponse.zestimate.amount._text;

        return(
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Property Details</CardTitle>
                <div>
                    <Form>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="year">Year Built:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input name="yearBuilt" id="yearBuilt" value={yearBuilt} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="squareFeet">Square Footage:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input name="squareFeet" id="squareFeet" value={finishedSqFt} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="bathrooms">No. of Bathrooms:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input name="bathrooms" id="bathrooms" value={bathrooms} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="bedrooms">No. of Bedrooms:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input name="bedrooms" id="bedrooms" value={bedrooms} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="zestimate">Zestimate Amount:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input name="zestimate" id="zestimate" value={zestimate} disabled />
                            </Col>
                        </Row>
                    </Form>
                </div>

            </Card>

        );
    }
}

export default PropertyInfo;