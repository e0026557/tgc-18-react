// Import React
import React from 'react';

// A class is a template for an object
// -> 'extends' means inherit -- the NumberBox class has all the methods and variables from the React.Component class
class NumberBox extends React.Component {
    // 'state' is an object that contains key-value pairs intended for data that is accessible by the component itself
    // -> it is a private data so no other componet itself can access or change it
    state =  {
        "count": this.props.initialValue // To access the props
    }

    // ARROW FUNCTIONS
    // event handlers should always be ARROW FUNCTIONS
    // -> using normal 'function' keyword will cause 'this' to be undefined
    click = () => {
        // DO NOT MUTATE (ie. change) A STATE VARIABLE DIRECTLY
        // -> because React cannot detect changes to the state
        // only on the next rneder will you see the change
        // Wrong way:
        // this.state.count ++;

        // Correct way to update the state
        // -> React can only detect change in the state via the setState() function
        this.setState({
            'count': this.state.count + 1
        })
    }

    // Alternatively, we can use ternary operators to do this (see below)
    displayStar() {
        if (this.state.count % 2 === 0) {
            return '*';
        }
        else {
            return '';
        }
    }

    // render() --> MUST HAVE!
    // whatever JSX is returned from the render() function is its output
    render() {
        return (
            <div style={
                {
                    "border": "1px solid black",
                    "borderColor": this.state.count > 0 ? "green" : "red",
                    "padding": "10px",
                    "width": "20px",
                    'fontSize': `${this.state.count + 10}px`,
                }
            } onClick={this.click}>
                {this.state.count}{this.displayStar()}{this.state.count % 2 === 0 ? '*' : ''}{this.state.count % 2 === 0 && '*'}
            </div>
        )
    }
}

export default NumberBox;