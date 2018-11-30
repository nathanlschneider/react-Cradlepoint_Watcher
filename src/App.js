import React, { Component } from 'react';
import Box from './Box';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errorMessage: null,
            size: 1
        };
    }
    componentDidMount() {
        const socket = new WebSocket('ws://localhost:5556/connect');

        socket.addEventListener('message', m => {
            console.log(m);
            this.setState({ data: JSON.parse(m.data) });
        });
    }
    render() {
        // eslint-disable-next-line
        let boxes = this.state.data.map((datum, index) => {
            if (datum !== null && datum.account !== null) {
                return (
                    <div>
                        <Box
                            key={index}
                            name={datum.name}
                            status={datum.state}
                            account={datum.account}
                            conType={datum.conType}
                        />
                    </div>
                );
            }
        });

        return (
            <div>
                {boxes}
                <Footer />
            </div>
        );
    }
}
export default App;
