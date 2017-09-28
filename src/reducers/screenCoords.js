const initialState = {
  x1: 0,
  x2: 15,
  y1: 0,
  y2: 29
};

const mapSize = [40, 20];

const screenCoords = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_MAP':
      const {x1, x2, y1, y2} = state.screenCoords;
      switch (action.payload.direction) {
        case 'LEFT':
          if (x1 > 0) {
            x1--;
            x2--;
          }
          break;
        case 'RIGHT':
          if (x2 < mapSize[0]-1) {
            x1++;
            x2++;
          }
          break;
        case 'UP':
          if (y1 > 0) {
            y1--;
            y2--;
          }
        case 'DOWN':
          if (y2 < mapSize[1]-1) {
            y1++;
            y2++;
          }
          
        return {x1, x2, y1, y2}
      }
    default:
      return state;
  }
}

export default screenCoords;