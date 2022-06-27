// import react component
import {Component} from 'react';

export default class Dice extends Component {
    // state variables
    state = {
        'value': 1
    }

    rollDice = () => {
        this.setState({
            'value': Math.floor(Math.random() * 6 + 1)
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