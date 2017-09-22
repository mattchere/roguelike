import React, { Component } from 'react';
import '../App.css';
import Stat from './Stat';

class StatusBar extends Component {
  render() {
    return (
      <ul className="status-bar">
        <li><Stat name="Health" /></li>
        <li><Stat name="Weapon" /></li>
        <li><Stat name="Attack" /></li>
        <li><Stat name="Level" /></li>
        <li><Stat name="Next Level" /></li>
      </ul>
    );
  }
}

export default StatusBar;
