// Import React 
import React from 'react';

class TickleBox extends React.Component {

    state = {
        'message': ''
    }

    mouseOver = () => {
        this.setState({
            'message': 'That tickles!'
        });
    }

    mouseOut = () => {
        this.setState({
            'message': ''
        });
    }

    render() {
        return (
            <div style={{
                'height': '100px',
                'width': '100px',
                'backgroundColor': 'pink'
            }} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                {this.state.message}
            </div>
        )
    }


}

export default TickleBox;