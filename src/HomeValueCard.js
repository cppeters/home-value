import React from 'react';
import { Card, CardImg, CardTitle, CardText,
    CardColumns, CardBody } from 'reactstrap';

class HomeValueCard extends React.Component {

    render() {

        return (
            <CardColumns>
                <Card>
                    <CardBody>
                        <CardTitle>Address</CardTitle>
                        <CardText>{this.props.address}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Google Street View</CardTitle>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                 alt="Card image cap" />
                    </CardBody>
                </Card>
                <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>Property Info</CardTitle>

                </Card>
            </CardColumns>
        );
    }
}

export default HomeValueCard;