import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Cell extends Component {
  render() {
    const typeToColor = (type) => {
      switch(type) {
        case 0:
          return 'black';
        case 1:
          return 'grey';
        case 2:
          return 'red';
        case 3:
          return 'white';
        default:
          return 'black';
      }
    }

    return (
      <div className="cell" style={{backgroundColor: typeToColor(this.props.type)}}>
      </div>
    );
  }
}

Cell.propTypes = {
  type: PropTypes.number.isRequired
}

export default Cell;
