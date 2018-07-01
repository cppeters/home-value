import React from "react";
import { Button, Form, Input } from 'reactstrap';
import './AddressForm.css';

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.state = {
            visitorAddress: '',
            clearForm: false
        };
    }

    handleAddressChange(e) {
        this.setState({
            visitorAddress: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Address: " + this.state.visitorAddress);
        this.setState((prevState) => ({
            clearForm: !prevState.clearForm
        }));
    }

    handleClearForm() {
        this.setState((prevState) => ({
            visitorAddress: '',
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

        return (
            <Form onSubmit={this.handleSubmit} className="form-style">
                <div className="form-group row">
                    <div className="col-4">
                        <Input type="text" name="visitorAddress"
                               placeholder="Enter Address" bsSize="lg"
                               value={this.state.visitorAddress} onChange={this.handleAddressChange}
                               required />
                    </div>
                    <div className="col-.5">
                        <Button color="success" size="lg" className="mb-2 mr-sm-2 mb-sm-0">Search</Button>
                    </div>
                    <div className="col-.5">
                        {clearFormButton}
                    </div>
                </div>
            </Form>
        );
    }
}

export default AddressForm;