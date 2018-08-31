import React from 'react';
import { Form, Card, Button, Input } from 'reactstrap';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import './AutoComplete.css';
import HomeValueCard from './HomeValueCard';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.state = {
            address: '',
            addressSubmit: '',
            clearForm: false
        };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));

        this.setState((prevState) => ({
            address: address,
            addressSubmit: address,
            clearForm: !prevState.clearForm
        }));
    };

    handleClearForm() {
        this.setState((prevState) => ({
            address: '',
            addressSubmit: '',
            clearForm: !prevState.clearForm
        }));
    };

    render() {
        let homeValueCard, clearFormButton;
        if (this.state.clearForm) {
            clearFormButton = <Button color="info" size="lg"
                                      className="mb-2 mr-sm-3 mb-sm-0"
                                      onClick={this.handleClearForm} >Clear</Button>;
        }

        if (this.state.addressSubmit !== '') homeValueCard = <HomeValueCard address={this.state.addressSubmit}/>;

        return (
            <div>
                <Card body outline color="primary" className="card-style">
                    <Form inline onSubmit={this.handleSubmit} className="form-style">
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>

                                    <Input
                                        {...getInputProps({
                                            placeholder: 'Search Places ...',
                                            className: 'location-search-input mb-2 mr-sm-3 mb-sm-0',
                                            bsSize: 'lg'
                                        })}
                                    />
                                    {clearFormButton}
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </Form>
                </Card>
                {homeValueCard}
            </div>
        );
    }
}

export default AutoComplete;