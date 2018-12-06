import React, { Component } from 'react';
import Box from './Box';
import Footer from './Footer';
import Loader from './Loader';
import Alerter from './Alerter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRender: true,
            data: [],
            error: false,
            errorMessage: null,
            filter: null,
            slideValue: undefined,
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ slideValue: event.target.value });
        localStorage.setItem('slideValue', this.state.slideValue);
    }

    componentDidMount() {
        const socket = new WebSocket('ws://inspire.gr.mhgi.net:5556/connect');

        socket.addEventListener('message', m => {
            this.setState({
                data: JSON.parse(m.data),
                loading: false
            });
        });

        socket.onopen = event => {
            this.setState({
                initialRender: false,
                slideValue: localStorage.slideValue,
                loading: true,
                error: false
            });
        };

        socket.onclose = event => {
            this.setState({ error: true });
        };

        socket.onerror = event => {
            this.setState({ error: true });
        };
    }

    render() {
        // eslint-disable-next-line
        let boxes = this.state.data.map((datum, index) => {
            if (datum !== null && datum.account !== null && datum.conType === 'LTE' && datum.state !== 'offline') {
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
                            initialRender={this.state.initialRender}
                        />
                    </div>
                );
            }
        });

        return (
            <React.Fragment>
                {boxes}
                <Footer
                    slider={
                        <input
                            type="range"
                            min="1"
                            max="100"
                            step="1"
                            value={this.state.slideValue}
                            onChange={this.handleChange}
                        />
                    }
                />
                <Alerter data="Connection Error" />
                <Loader loading={this.state.loading} />
            </React.Fragment>
        );
    }
}
export default App;
