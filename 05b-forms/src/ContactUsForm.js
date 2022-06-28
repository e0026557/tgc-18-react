// Import react
import React from "react";

export default class ContactUsForm extends React.Component {
  // State variables
  // -> data that the component is in charge of
  // IMPORTANT: Ensure that there are no derived values
  // -> conditional rendering instead of storing as state variables
  state = {
    firstName: "",
    lastName: "",
    enquiryType: "",
    country: "singapore",
  };

  // Methods
  // -> IMPORTANT: Make sure that event handlers (ie. functions that are called in response to an event happening) are ARROW FUNCTIONS

  updateFormField = (event) => {
    let stateVariable = event.target.name; // event.target.name is the name attribute of the element that the event happened on

    // IMPORTANT: Take note that the [] wrapping the stateVariable is because we want to use the value of the variable to be the key of the state object
    this.setState({
      [stateVariable]: event.target.value
    })
  }


  updateFirstName = (event) => {
    this.setState({
      // event.target => element that the event happens on
      // event.target.value => the content of the element
      firstName: event.target.value,
    });
  };

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  updateEnquiryType = (event) => {
    this.setState({
      enquiryType: event.target.value,
    });
  };

  updateCountry = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  EnableSubmitButton = () => {
    let { firstName, lastName, enquiryType, country } = this.state;

    return (
      <input
        type="submit"
        value="Submit"
        className="btn btn-primary mt-4"
        disabled={!(firstName && lastName && enquiryType && country)}
      />
    );
  };

  // IMPORTANT: Make sure not to call setState in the render function
  // -> derived values should go into render
  render() {
    return (
      // Form div
      <div>
        <div className="mt-2">
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={this.state.firstName}
            onChange={this.updateFirstName}
          />
        </div>

        <div className="mt-2">
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={this.state.lastName}
            onChange={this.updateLastName}
          />
        </div>

        <div className="mt-2">
          <label>Enquiry Type:</label>

          <input
            type="radio"
            name="enquiryType"
            value="support"
            className="form-check-input"
            checked={this.state.enquiryType === "support"}
            onChange={this.updateEnquiryType}
          />
          <label className="form-check-label">Support</label>

          <input
            type="radio"
            name="enquiryType"
            value="sales"
            className="form-check-input"
            checked={this.state.enquiryType === "sales"}
            onChange={this.updateEnquiryType}
          />
          <label className="form-check-label">Sales</label>

          <input
            type="radio"
            name="enquiryType"
            value="marketing"
            className="form-check-input"
            checked={this.state.enquiryType === "marketing"}
            onChange={this.updateEnquiryType}
          />
          <label className="form-check-label">Marketing</label>
        </div>

        <div className="mt-2">
          <label>Country of Origin:</label>

          <select
            name="country"
            className="form-select"
            value={this.state.country}
            onChange={this.updateCountry}
          >
            <option value="singapore">Singapore</option>
            <option value="thailand">Thailand</option>
            <option value="malaysia">Malaysia</option>
          </select>
        </div>

        <this.EnableSubmitButton />
      </div>
    );
  }
}
