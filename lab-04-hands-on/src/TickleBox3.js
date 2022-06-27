// Import React 
import React from 'react';

class TickleBox3 extends React.Component {

    state = {
        'showMessage': false
    }

    render() {
        return (
            <div style={{
                'height': '100px',
                'width': '100px',
                'backgroundColor': 'pink'
            }} onMouseOver={()=> this.setState({
                'showMessage': !this.state.showMessage
            })} onMouseOut={()=>this.setState({
                'showMessage': !this.state.showMessage
            })}>
                {this.state.showMessage ? 'That tickles!' : ''}
            </div>
        )
    }


}

export default TickleBox3;