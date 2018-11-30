import React, { Component } from 'react';
import './Box.scss';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            size: null
        };
    }

    static defaultProps = {
        name: '--',
        conType: '--',
        status: '--',
        account: '--',
    };

    componentDidMount() {
        this.setState({ size: this.props.size });

    }

    render() {
        return (
            <div className="box-wrapper" style={{ opacity: this.props.status === 'offline' ? '.4' : '1' }}>
                <div className="device-box" style={{ background: this.props.account === '28784' ? '#3073B1' : null }}>
                    <div className="device-name">{this.props.name}</div>
                    <div className="device-conType" style={{ color: this.props.conType === 'LTE' ? '#f66464' : null }}>
                        {this.props.conType}
                    </div>
                    <div className="secondary">
                        <div className="device-status">{this.props.status}</div>
                    </div>
                </div>
            </div>
        );
    }
}
