import React, {Component} from 'react';
import '../App.css';
import Cell from './Cell';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        {this
          .props
          .screen
          .map(row => row.map(cell => <Cell type={cell} />))}
      </div>
    );
  }
}

Screen.PropTypes = {
  screen: PropTypes.array.isRequired
}

export default Screen;
