import React from 'react';
import { Card, CardTitle, Form, Row, Col, Label, Input } from 'reactstrap';

class PropertyInfo extends React.Component {
    render() {
        const zillowResponse = this.props.zillowResponse;
        const yearBuilt = zillowResponse.yearBuilt._text;
        const finishedSqFt = zillowResponse.finishedSqFt._text;
        const bathrooms = zillowResponse.bathrooms._text;
        const bedrooms = zillowResponse.bedrooms._text;
        const zestimate = zillowResponse.zestimate.amount._text;

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
                                <Input type="number" maxLength="4" name="yearBuilt" id="yearBuilt" value={yearBuilt} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="squareFeet">Square Footage:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input type="number" name="squareFeet" id="squareFeet" value={finishedSqFt} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="bathrooms">No. of Bathrooms:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input type="number" name="bathrooms" id="bathrooms" value={bathrooms} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="bedrooms">No. of Bedrooms:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input type="number" name="bedrooms" id="bedrooms" value={bedrooms} disabled />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Label for="zestimate">Zestimate Amount:</Label>
                            </Col>
                            <Col sm={{size: 'auto', offset: 'auto'}}>
                                <Input type="number" name="zestimate" id="zestimate" value={zestimate} disabled />
                            </Col>
                        </Row>
                    </Form>
                </div>

            </Card>

        );
    }
}

export default PropertyInfo;