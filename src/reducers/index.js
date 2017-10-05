import {combineReducers} from 'redux';
import mapBackground from './mapBackground';
import screenCoords from './screenCoords';

const roguelikeApp = combineReducers({
  mapBackground,
  screenCoords
})

export default roguelikeApp;