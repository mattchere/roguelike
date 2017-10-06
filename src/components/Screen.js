import React, {Component} from 'react';
import '../App.css';
import Cell from './Cell';
import PropTypes from 'prop-types';

class Screen extends Component {
  render() {
    const {x1, x2, y1, y2} = this.props.screen
    return (
      <div className="screen">
        {this
          .props
          .background
          .map((row,i) => 
            row.map((cell,j) => 
              i >= y1 && i <= y2 && j >= x1 && j <= x2 ?
              <Cell key={Number(String(i) + String(j))} type={cell} /> :
              undefined
          ))}
      </div>
    );
  }

  componentDidMount() {
    this.onKeyDown = document.addEventListener('keydown', this.props.onKeyDown);
  }

  componentWillUnmount() {
    this.onKeyDown();
  }
}

Screen.PropTypes = {
  screen: PropTypes.array.isRequired
}

export default Screen;
