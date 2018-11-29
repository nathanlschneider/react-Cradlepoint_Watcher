import React, { Component } from 'react';
import './Box.scss';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
          };
    }

    static defaultProps = {
        name: 'unknown',
        conType: 'unknown',
        status: 'unknown',
        account: 'unknown',
    }

    componentDidMount() {
        const device = document.querySelector('.device-box');
        if (this.props.conType !== 'LTE') {
            device.style.display = "none";
        }
    }

    render() {
        return (
            <div className="device-box" style={{display: this.props.conType !== 'LTE' ? 'none' : 'flex'}}>
                <div className="device-name"><h1>{this.props.name}</h1></div>
                <div className="device-conType">{this.props.conType}</div>
                <div className="device-status">Status: {this.props.status}</div>
            </div>
        );
    }
}
