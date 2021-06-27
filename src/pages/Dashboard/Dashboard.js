import React from 'react';

class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            error: null
        };
    }

    render() {
        
        return (
            <>
                {this.state.error && <p>{this.state.error}</p>}
                <h1>Welcome !</h1>
            </>
        )
    }
}

export default Dashboard;