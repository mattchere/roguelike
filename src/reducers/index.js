import {combineReducers} from 'redux';
import {map1} from '../maps/Map1';
import mapBackground from './mapBackground';
import screenCoords from './screenCoords';

const roguelikeApp = combineReducers({
  mapBackground,
  screenCoords
})

export default roguelikeApp;