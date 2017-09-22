import React, { Component } from 'react';
import './App.css';
import StatusBar from './components/StatusBar';
import Screen from './components/Screen';

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
