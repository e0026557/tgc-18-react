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
            'count': this.state.count + this.props.steps
        })
    }

    // IMPORTANT: Never use ++ or --  for state variables!
    increment = () => {
        this.setState({
            'count': this.state.count + 1
        })
    }

    // The 'this' will always refer to the object that the function 
    decrement = function() {
        this.setState({
            'count': this.state.count - 1
        })
    }.bind(this);

    // render() --> MUST HAVE!
    // whatever JSX is returned from the render() function is its output
    render() {
        return (
            <div style={
                {
                    "border": "1px solid black",
                    "padding": "10px",
                    "width": "20px",
                }
            }>
                {this.state.count}

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default NumberBox;