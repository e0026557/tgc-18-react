// Import React 
import React from 'react';

class TickleBox2 extends React.Component {

    state = {
        'showMessage': false
    }

    tickles = () => {
        this.setState({
            'showMessage': !this.state.showMessage
        });
    }

    render() {
        return (
            <div style={{
                'height': '100px',
                'width': '100px',
                'backgroundColor': 'grey'
            }} onMouseOver={this.tickles} onMouseOut={this.tickles}>
                {this.state.showMessage ? 'That tickles!' : ''}
            </div>
        )
    }


}

export default TickleBox2;