import React from 'react';

export default class SurveyForm extends React.Component {
    // SEIPO:
    // State: what are the state variables of the component (ie. what are the data that the component is in charge of)

    state = {
        'name': '',
        'email': '',
        'color': ''
    }

    // Methods
    // -> event will always refer to the event that happened
    // -> event.target will be the element taht the event happened on
    // -> event.target.value will be what the new value should be
    updateName = (event) => {
        this.setState({
            'name': event.target.value
        })
    }

    updateEmail = (event) => {
        this.setState({
            'email': event.target.value
        })
    }

    updateColor = (event) => {
        this.setState({
            'color': event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text"
                        className='form-control'
                        value={this.state.name}
                        onChange={this.updateName}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                        className='form-control'
                        value={this.state.email}
                        onChange={this.updateEmail}
                    />
                </div>

                <div>
                    <label>Favorite color:</label>

                    <input type="radio" 
                           name="colors" 
                           value="red" 
                           className="form-check-input"
                           onChange={this.updateColor}
                           checked={this.state.color === 'red'}
                    />
                    <label className="form-check-label">Red</label>

                    <input type="radio" 
                            name="colors" value="green" 
                            className="form-check-input" 
                            onChange={this.updateColor}
                            checked={this.state.color === 'green'}
                    />
                    <label className="form-check-label">Green</label>

                    <input type="radio" 
                        name="colors" value="blue" 
                        className="form-check-input" 
                        onChange={this.updateColor} 
                        checked={this.state.color === 'blue'}
                    />
                    <label className="form-check-label">Blue</label>
                </div>

            </div>
        );
    }
}