import React, { Component } from 'react';
import Box from './Box';
import Footer from './Footer';
//import Slider from './Slider';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errorMessage: null,
            filter: null,
            slideValue: 100
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ slideValue: event.target.value });
        console.log(this.state.slideValue)
    }

    componentDidMount() {
        const socket = new WebSocket('ws://localhost:5556/connect');

        socket.addEventListener('message', m => {
            this.setState({ data: JSON.parse(m.data) });
        });
    }

    render() {
        // eslint-disable-next-line
        let boxes = this.state.data.map((datum, index) => {
            if (datum !== null && datum.account !== null && datum.conType === 'LTE') {
                return (
                    <div>
                        <Box
                            key={index}
                            name={datum.name}
                            status={datum.state}
                            account={datum.account}
                            conType={datum.conType}
                            size={this.state.slideValue}
                            filter={this.state.filter}
                        />
                    </div>
                );
            }
        });

        return (
            <React.Fragment>
                {boxes}
                <Footer slider={<input type="range" min="1" max="100" step="1" value={this.state.slideValue} onChange={this.handleChange} />} />
            </React.Fragment>
        );
    }
}
export default App;
