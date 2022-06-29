import React from 'react';
import axios from 'axios';

export default class ContactForm extends React.Component {
    // the state variables are the data that component has responsbility for
    // make sure that there are no derived values
    state = {
        firstName: '',
        lastName: '',
        enquiry: 'support',
        country: 'singapore',
        contacts: [],
        allEnquiries: [],
        allCountries: [],
        allContacts: [],
        loaded: false
    };

    async componentDidMount() {
        // Loading JSON files in series
        // let enquiryResponse = await axios.get('/enquiries.json');
        // let countryResponse = await axios.get('/countries.json');
        // let contactResponse = await axios.get('/contacts.json');

        // this.setState({
        // 	allEnquiries: enquiryResponse.data,
        // 	allCountries: countryResponse.data,
        // 	allContacts: contactResponse.data,
        // 	loaded: true
        // });

        // Loading JSON files in parallel (save time)
        let contactRequest = axios.get('/contacts.json');
        let enquiryRequest = axios.get('/enquiries.json');
        let countryRequest = axios.get('/countries.json');

        // axios.all takes in an array of requests
        let [contactResponse, enquiryResponse, countryResponse] = await axios.all([contactRequest, enquiryRequest, countryRequest]);

        this.setState({
            allEnquiries: enquiryResponse.data,
            allCountries: countryResponse.data,
            allContacts: contactResponse.data,
            loaded: true
        });
    }

    // FUNCTIONS
    renderEnquiries() {
        return this.state.allEnquiries.map((enquiry, index) => (
            <React.Fragment key={index}>
                <input
                    type='radio'
                    name='enquiry'
                    id={enquiry.value}
                    value={enquiry.value}
                    onChange={this.updateEnquiry}
                    checked={this.state.enquiry === enquiry.value}
                />
                <label htmlFor={enquiry.value}>{enquiry.display}</label>
            </React.Fragment>
        ));
    }

    renderCountries() {
        return this.state.allCountries.map((country, index) => (
            <option key={index} value={country.value}>
                {country.display}
            </option>
        ));
    }

    renderContacts() {
        return this.state.allContacts.map((contact, index) => (
            <React.Fragment key={index}>
                <input
                    type='checkbox'
                    id={contact.value}
                    value={contact.value}
                    onChange={this.updateContacts}
                    checked={this.state.contacts.includes(contact.value)}
                />
                <label htmlFor={contact.value}>{contact.display}</label>
            </React.Fragment>
        ));
    }

    // EVENT HANDLERS
    // make sure event handlers (i.e functions that are called in response to an event happening)
    // are arrow functions
    updateFirstName = (event) => {
        // the first argument is the event object. It represents the event that has happened
        // event.target => element that the event happens on
        // event.target.value => the content of the element
        this.setState({
            firstName: event.target.value // set the firstName state property to be whatever is inside the textbox
        });
    };

    updateLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };

    updateEnquiry = (event) => {
        this.setState({
            enquiry: event.target.value
        });
    };

    updateCountry = (event) => {
        this.setState({
            country: event.target.value
        });
    };

    updateContacts = (event) => {
        // is the checkbox that is being clicked on already checked or unchecked?
        if (this.state.contacts.includes(event.target.value)) {
            // the user is unchecking the checkbox
            let indexToRemove = this.state.contacts.indexOf(event.target.value);

            // 1. clone the array
            let cloned = this.state.contacts.slice();
            // 2. modify the cloned array (removing the element at indexToRemove)
            cloned.splice(indexToRemove, 1);
            // 3. replace the original array in the state with the cloned
            this.setState({
                contacts: cloned
            });
        } else {
            // the user is checking the checkbox
            // 1. clone the array
            let cloned = this.state.contacts.slice();
            // 2. modify the cloned array
            cloned.push(event.target.value);
            // 3. replace the cloned array into the state
            this.setState({
                contacts: cloned
            });
        }
    };

    render() {
        // 1. make sure do not call setState in the render function
        // under any circumistances
        // 2. derived values should go into render

        if (this.state.loaded) {
            return (
                <div>
                    <div>
                        <label>First Name:</label>
                        <input
                            type='text'
                            value={this.state.firstName}
                            onChange={this.updateFirstName}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type='text'
                            value={this.state.lastName}
                            onChange={this.updateLastName}
                        />
                    </div>
                    <div>
                        <label>Type of enquiry</label>

                        {
                            this.state.allEnquiries.map(enquiry => (
                                <React.Fragment key={enquiry.value}>
                                    <input
                                        type='radio'
                                        name='enquiry'
                                        id={enquiry.value}
                                        value={enquiry.value}
                                        onChange={this.updateEnquiry}
                                        checked={this.state.enquiry === enquiry.value}
                                    />
                                    <label htmlFor={enquiry.value}>{enquiry.display}</label>
                                </React.Fragment>
                            ))
                        }

                        {/* Alternative method */}
                        {/* {this.renderEnquiries()} */}
                    </div>

                    <div>
                        <select
                            value={this.state.country}
                            onChange={this.updateCountry}
                        >
                            {/* {this.renderCountries()} */}

                            {
                                // Self-calling function (alternative method)
                                (() => {
                                    let options = [];
                                    for (let c of this.state.allCountries) {
                                        options.push(
                                            <option key={c.value} value={c.value}>{c.display}</option>
                                        )
                                    }
                                    return options;
                                })()
                            }

                        </select>
                    </div>

                    <div>
                        {/* {this.renderContacts()} */}


                        {/* Alternative method */}
                        {
                            this.state.allContacts.map(contact => {
                                <React.Fragment key={contact.value}>
                                    <input
                                        type='checkbox'
                                        id={contact.value}
                                        value={contact.value}
                                        onChange={this.updateContacts}
                                        checked={this.state.contacts.includes(contact.value)}
                                    />
                                    <label htmlFor={contact.value}>{contact.display}</label>
                                </React.Fragment>
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return <div id='loading'>Loading please wait ... </div>;
        }
    }
}
