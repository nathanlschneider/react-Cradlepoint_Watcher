import React, { Component } from 'react';
import Box from './Box';
import Alerter from './Alerter';
//import Loader from './Loader';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errorMessage: null
        };
    }
    componentDidMount() {
        const socket = new WebSocket('ws://localhost:5556/connect');

        socket.onerror = event => {
            console.log('onerror', event);
            this.setState({ error: true, errorMessage: 'server connection: ' + event.type });
        };

        socket.onclose = event => {
            console.log('onclose', event);
            this.setState({ error: true, errorMessage: 'server connection: ' + event.type });
        };

        socket.addEventListener('message', m => {
            console.log(m);
            this.setState({ data: JSON.parse(m.data) });
        });
    }
    render() {
        if (this.state.error) {
            return <Alerter data={this.state.errorMessage} />;
        }
        return this.state.data.map((datum, index) => {
            if (datum !== null && datum.account !== null) {
                return (
                    <Box
                        key={index}
                        name={datum.name}
                        status={datum.state}
                        account={datum.account}
                        conType={datum.conType}
                    />
                );
            }
            return null;
        });
    }
}

export default App;
