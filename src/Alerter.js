import React, { Component } from 'react';
import './Alerter.scss';
export default class Alerter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
          };
    }

    componentDidMount() {
        setInterval(() => { 
            window.location.reload();
        }, 60000)
    }
    render() {
        return (
            <div className='alerter-box'>
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}
