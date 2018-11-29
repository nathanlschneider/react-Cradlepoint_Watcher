import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        const socket = new WebSocket('ws://localhost:5556/connect');
      socket.addEventListener('message', m => {
            this.setState({ data: JSON.parse(m.data) });
        });
    }
  render() {
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
