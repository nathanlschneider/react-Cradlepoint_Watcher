import React, { Component } from 'react';
import './Footer.scss';
import ColorKey from './ColorKey';


export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    static defaultProps = {};

    componentDidMount() {}

    render() {
        return (
            <nav className="nav-bar">
                <h1 className="logo">Cradlepoint Watcher v.06</h1>
                <div className="menu-button" style={{ display: 'none' }}>
                    <div className="menu-button-bar" />
                    <div className="menu-button-bar" />
                    <div className="menu-button-bar" />
                </div>
                <ColorKey />
                <div className="slider">{this.props.slider}</div>
            </nav>
        );
    }
}
