import React, { Component } from 'react';
import '../App.css';
import Stat from './Stat';

class StatusBar extends Component {
  render() {
    return (
      <ul className="status-bar">
        <li><Stat name="Health" value={this.props.health} /></li>
        <li><Stat name="Weapon" value={this.props.weapon} /></li>
        <li><Stat name="Attack" value={this.props.attack} /></li>
        <li><Stat name="Level" value={this.props.level} /></li>
        <li><Stat name="Next Level" value={this.props.nextLevel} /></li>
      </ul>
    );
  }
}

export default StatusBar;
