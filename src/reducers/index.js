import {combineReducers} from 'redux';
import mapBackground from './mapBackground';
import screenCoords from './screenCoords';
import stats from './stats';

const roguelikeApp = combineReducers({
  mapBackground,
  screenCoords,
  stats
})

export default roguelikeApp;