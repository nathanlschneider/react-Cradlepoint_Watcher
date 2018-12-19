import React, { Component } from 'react';
import './ColorKey.scss';

export default class ColorKey extends Component {
    render() {
        return (
            <div className="key-container">
                <div className="key-hours">
                    <div>0h</div>
                    <div>2h</div>
                    <div>4h</div>
                    <div>6h</div>
                    <div>8h</div>
                </div>
                <div className="color-key" />
            </div>
        );
    }
}
