import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class StreetView extends React.Component {
    render() {
        const height = '600';
        const width = '300';
        const size = height + 'x' + width;
        const google = `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${this.props.address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

        return(
            <Card>
                <CardBody>
                    <CardTitle>Google Street View</CardTitle>
                    <CardText>{this.props.address}</CardText>
                </CardBody>
                <CardImg top width="100%"
                         src={google}
                         alt="Image Not Found" />
            </Card>
        );
    }
}

export default StreetView;