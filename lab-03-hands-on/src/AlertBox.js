// Import React
// import React from 'react';

// alternatively
import {Component} from 'react'; // -> ONLY import React.Component

// Create AlertBox component
class AlertBox extends Component {
    // All component classes must have a render() function and return JSX

    // state properties/variables
    state = {
        'message': this.props.message
    };

    render() {
        return (
            <div style={{
                'border': '4px solid black'
            }}>
                {this.state.message}
            </div>
        );
    }
}

// Export AlertBox component
export default AlertBox;