import React from 'react';
import { Card, CardImg, CardTitle, CardText,
    CardBody, Row, Col } from 'reactstrap';
import './HomeValueCard.css';

class HomeValueCard extends React.Component {

    render() {
        const height = '600';
        const width = '300';
        const size = 'size=' + height + 'x' + width;
        const google = 'https://maps.googleapis.com/maps/api/streetview?' + size +
            '&location=' + this.props.address + '&key=' + `${process.env.REACT_APP_GOOGLE_API_KEY}`;

        return (
            <div className="home-value-container">
                <Row>
                    <Col xs="5">
                        <Card>
                            <CardBody>
                                <CardTitle>Google Street View</CardTitle>
                                <CardText>{this.props.address}</CardText>
                            </CardBody>
                            <CardImg top width="100%"
                                     src={google}
                                     alt="Card image cap" />
                        </Card>
                    </Col>
                    <Col xs="7">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle>Property Details</CardTitle>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeValueCard;