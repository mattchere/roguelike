import {connect} from 'react-redux';
import Screen from '../components/Screen';
import {moveMap} from '../actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    screen: state.screenCoords,
    background: state.mapBackground
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyDown: event => {
      dispatch(moveMap(event.key));
    }
  }
}

const VisibleScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

export default VisibleScreen;