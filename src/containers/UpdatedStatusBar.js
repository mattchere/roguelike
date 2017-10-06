import {connect} from 'react-redux';
import StatusBar from '../components/StatusBar';

const mapStateToProps = state => {
  return state.stats;
}

const UpdatedStatusBar = connect(
  mapStateToProps,
  null
)(StatusBar);

export default UpdatedStatusBar;