import React from 'react';
import { Card, CardTitle, CardText,
    Container, Row, Col } from 'reactstrap';
import './HomeValueCard.css';
import callZillow from './zillow';
import StreetView from './StreetView';
import PropertyInfo from './PropertyInfo';

class HomeValueCard extends React.Component {
    constructor(props) {
        super(props);
        this.loadHomeDetails = this.loadHomeDetails.bind(this);
        this.onSetResult = this.onSetResult.bind(this);
        this.state = {
            zillowResponse: {},
            notFound: false
        }
    }

    componentDidMount() {
        this.loadHomeDetails(this.props.address);
    }

    componentDidUpdate(prevProps) {
        const key = this.props.address;
        if (key !== prevProps.address) {
            this.loadHomeDetails(key);
        }
    }

    loadHomeDetails(key) {
        const cachedZillowResponse = sessionStorage.getItem(key);
        if (cachedZillowResponse && cachedZillowResponse !== 'undefined') {
            this.setState(() => ({
                zillowResponse: Object.assign({}, JSON.parse(cachedZillowResponse)),
                notFound: false
            }));
        }
        else {
            const parsedAddress = parseAddressString(key);
            callZillow(parsedAddress).then(result => this.onSetResult(result, key));
        }
    }

    onSetResult(result, key) {
        sessionStorage.setItem(key, JSON.stringify(result));
        if (result) {
            this.setState(() => ({
                zillowResponse: Object.assign({}, result),
                notFound: false
            }));
        }
        else {
            this.setState(() => ({
                notFound: true
            }));
        }
    }


    render() {
        let propertyInfo, streetView, notFound;
        const zillowResponse = this.state.zillowResponse;

        if (Object.keys(zillowResponse).length > 0) {
            propertyInfo = <PropertyInfo zillowResponse={zillowResponse} />;
            streetView = <StreetView address={this.props.address} />;
        }

        if (this.state.notFound) {
            notFound = <Card>
                    <CardTitle>Not Found</CardTitle>
                    <CardText>Zillow was unable to find a match for {this.props.address}.</CardText>
            </Card>;
        }

        return (
            <div>
                {notFound}
                <Container className="home-value-container">
                    <Row>
                        <Col xs="5">
                            {streetView}
                        </Col>
                        <Col xs="7">
                            {propertyInfo}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function parseAddressString(addressString) {
    let indexOfFirstDigit = addressString.indexOf(addressString.match(/\d/));
    addressString = addressString.substring(indexOfFirstDigit);
    let addressCityStateZip = addressString.split(',');
    const address = addressCityStateZip[0];
    const city = addressCityStateZip[1].trim();
    const state = addressCityStateZip[2].trim();
    return {
        address: address.replace(/\s/g, "+"),
        cityState: `${city},${state}`
    };
}

export default HomeValueCard;