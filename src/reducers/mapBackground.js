import {map1} from '../maps/maps';

const mapBackground = (state = map1, action) => {
  switch (action.type) {
    case 'SWITCH_MAP':
      return state;
    default:
      return state;
  }
}

export default mapBackground;