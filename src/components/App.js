import React, { Component } from 'react';
import '../App.css';
import UpdatedStatusBar from '../containers/UpdatedStatusBar';
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
          <UpdatedStatusBar />
          <VisibleScreen />
        </div>
      </div>
        );
      }
    }
    
export default App;
