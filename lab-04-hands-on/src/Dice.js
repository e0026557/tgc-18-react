// import react component
import {Component} from 'react';

export default class Dice extends Component {

    // Methods
    getRandomNumber() {
        return Math.floor(Math.random() * 6 + 1)
    }

    // state variables
    state = {
        // Set the initial value of number to be a random number from 1 to 6
        'value': this.getRandomNumber()
    }

    rollDice = () => {
        this.setState({
            'value': this.getRandomNumber()
        })
    }

    setColor(num) {
        if (num === 1) {
            return 'red'
        }
        else if (num === 6) {
            return 'green'
        }
        return 'black';
    }

    // Never call setState inside render() function -> will create an infinite rendering issue
    // -> instead call it via an event listener
    render() {
        return (
            <div style={{
                'height': '50px',
                'width': '50px',
                'backgroundColor': 'orange',
                'color': this.setColor(this.state.value)
            }} onClick={this.rollDice}>
                {this.state.value}
            </div>
        )
    }
}