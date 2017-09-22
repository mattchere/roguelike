import React, { Component } from 'react';
import '../App.css';

class StatusBar extends Component {
  render() {
    return (
      <p>{this.props.name}: 1</p>
    );
  }
}

export default StatusBar;
