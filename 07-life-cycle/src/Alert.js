import React from 'react'

export default class Alert extends React.Component {

    state = {
        'msg': 'Some message'
    }

    constructor(props) {
        // Note: Cannot call setState inside construction function because state is only ready after the constructor is run (ie. not available yet)
        super(props)
        console.log('constructor')
    }

    // Runs after the constructor function (after the first render)
    componentDidMount() {
        console.log('Component did mount')
    }

    // Runs after a change in props or state
    componentDidUpdate(prevProps, prevState) {
        console.log('update detected')
        console.log(prevState)
    }

    render() {
        return (
            <div>
                <h1>Alert</h1>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }

}