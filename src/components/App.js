import React, { Component } from 'react';
import '../App.css';
import StatusBar from './StatusBar';
import Screen from './Screen';
import {map1} from '../maps/Map1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>React Roguelike</h1>
          <p>Kill the boss to win</p>
        </div>
        <div className="game">
          <StatusBar />
          <Screen background={map1} screen={{x1: 0, x2: 15, y1: 0, y2: 29}} />
        </div>
      </div>
    );
  }
}

export default App;
