import React, { Component } from 'react';
import '../App.css';
import StatusBar from './StatusBar';
import Screen from './Screen';

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
          <Screen />
        </div>
      </div>
    );
  }
}

export default App;
