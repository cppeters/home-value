import React from "react";
import { Button, Form, Input, Card } from 'reactstrap';
import './AddressForm.css';
import HomeValueCard from './HomeValueCard';

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.state = {
            addressInput: '',
            addressSubmit: '',
            clearForm: false
        };
    }

    handleAddressChange(e) {
        this.setState({
            addressInput: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((prevState) => ({
            addressSubmit: this.state.addressInput,
            clearForm: !prevState.clearForm
        }));
    }

    handleClearForm() {
        this.setState((prevState) => ({
            addressInput: '',
            clearForm: !prevState.clearForm
        }));
    }

    render() {
        let clearFormButton;
        if (this.state.clearForm) {
            clearFormButton = <Button color="info" size="lg"
                                      className="mb-2 mr-sm-3 mb-sm-0"
                                      onClick={this.handleClearForm} >Clear</Button>;
        }

        let homeValueCard;
        if (this.state.addressSubmit !== '') homeValueCard = <HomeValueCard address={this.state.addressSubmit}/>;

        return (
            <div>
                <Card body outline color="primary" className="card-style">
                    <Form inline onSubmit={this.handleSubmit} className="form-style">
                        <Input type="text" name="visitorAddress"
                               placeholder="Enter Address" bsSize="lg"
                               value={this.state.addressInput} onChange={this.handleAddressChange}
                               className="mb-2 mr-sm-3 mb-sm-0"
                               required />
                        <Button color="success" size="lg" className="mb-2 mr-sm-2 mb-sm-0">Search</Button>
                        {clearFormButton}
                    </Form>
                </Card>
                {homeValueCard}
            </div>
        );
    }
}

export default AddressForm;