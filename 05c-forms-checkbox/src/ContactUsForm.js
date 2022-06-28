// Import react
import React from "react";

export default class ContactUsForm extends React.Component {
  // State variables
  // -> data that the component is in charge of
  // IMPORTANT: Ensure that there are no derived values
  // -> conditional rendering instead of storing as state variables
  state = {
    hasSubmitted: false,
    firstName: "",
    lastName: "",
    enquiryType: "",
    country: "singapore",
    fruits: []
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


  // NOTE: Handling arrays in state variables are tricky
  // React community believes in values that should be immutable
  updateFruits = (event) => {
    // Check if the value is already in the array (ie. check if the checkbox is already checked)
    // -> remove if the value is already in the array
    if (this.state.fruits.includes(event.target.value)) {
      // uncheck the checkbox

      // 1. Clone the array
      let clonedArr = this.state.fruits.slice();

      // 2. Get the index of element to remove
      let indexToRemove = -1;
      for (let i=0; i< this.state.fruits.length; i++) {
        if (this.state.fruits[i] === event.target.value) {
          indexToRemove = i;
          break;
        }
      }

      // 3. Remove the element
      clonedArr.splice(indexToRemove, 1);

      // 4. Update the state variable
      this.setState({
        fruits: clonedArr
      });

    }

    else {
      // Steps to handle array
      // -> Same for both adding and removing from array
      // 1. Clone the original array
      // 2. Update the cloned array
      // 3. Set the cloned array back into the state
      let clonedArr = this.state.fruits.slice();
      clonedArr.push(event.target.value);
      this.setState({
        fruits: clonedArr
      });

    }
  }

  updateFruitsV2 = (event) => {
    // Another method is using spread operator for arrays
    if (this.state.fruits.includes(event.target.value)) {
      // Removing from array
      // 1. Get index of element to remove
      let indexToRemove = this.state.fruits.indexOf(event.target.value);
      let clonedArr = [
        ...this.state.fruits.slice(0, indexToRemove),
        ...this.state.fruits.slice(indexToRemove)
      ]
      this.setState({
        fruits: clonedArr
      })
    }
    else {
      // Adding to array
      let clonedArr = [...this.state.fruits, event.target.value];
      this.setState({
        fruits: clonedArr
      });
    }


  }

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


  // VALIDATION
  getNameError = () => {
    if (this.state.firstName.length < 3) {
      return 'The name must have 3 or more characters';
    }
    else if (this.state.firstName.length > 20) {
      return 'The name must not exceed 20 characters';
    }
    else {
      return null;
    }
  }

  getEmailError = () => {
    if (this.state.email.includes('@') === false) {
      return 'The email is in the wrong format';
    }
    else {
      return null;
    }
  }

  submit = () => {
    // Change state variable
    this.setState({
      hasSubmitted: true
    });

    if (!this.getNameError()) {
      alert("All data is ok!");
    }
  }

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
          {this.getNameError() && this.state.hasSubmitted ? <span className="error">{this.getNameError()}</span> : '' }
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

        <div>
          <label>Fruits:</label>
          <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruits}/>Apple
          <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruits}/>Orange
          <input type="checkbox" name="fruits" value="pineapple" onChange={this.updateFruits}/>Pineapple
          <input type="checkbox" name="fruits" value="durian" onChange={this.updateFruits}/>Durian
        </div>


        <button onClick={this.submit}>Submit</button>

      </div>
    );
  }
}
