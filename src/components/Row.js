import React, { Component } from 'react';
import '../App.css';

class Row extends Component {
  render() {
    return (
      <div className="row">
        {this.props.row.map(cell =>
          <CellContainer type={cell} />)}
      </div>
    );
  }
}

export default Row;
