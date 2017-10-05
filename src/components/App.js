import React, { Component } from 'react';
import '../App.css';
import StatusBar from './StatusBar';
import VisibleScreen from '../containers/VisibleScreen';

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
          <VisibleScreen />
        </div>
      </div>
        );
      }
    }
    
    // <Screen background={map1} screen={{x1: 0, x2: 15, y1: 0, y2: 29}} />
export default App;
