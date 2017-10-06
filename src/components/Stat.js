import React, { Component } from 'react';
import '../App.css';

class StatusBar extends Component {
  render() {
    return (
      <p>{this.props.name}: {this.props.value}</p>
    );
  }
}

export default StatusBar;
