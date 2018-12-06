import React, { Component } from 'react';
//import './Slider.scss';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideValue: 0
        }
    }
   
    render() {
        return (
            <input type="range" value={this.props.slideValue} />
          );
    }
}