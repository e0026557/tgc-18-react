import React from 'react';

// class-based component example
// make sure the name of the class matches the filename
class ClickCount extends React.Component {

    // State 
    // -> can be changed, unlike props which is read-only
    // IMPORTANT: The name of the variable must be 'state'
    state = {
        'count': 0
    }

    // render is defined as a function inside React.Component
    // -> whatever JSX is returned from render will be rendered on the website
    render() {
        return (
            <h1>
                Click Count = {this.state.count}
            </h1>
        )
    }
}

export default ClickCount
