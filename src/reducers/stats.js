const initialValue = {
  health: 100,
  weapon: 'Stick',
  attack: 10,
  level: 1,
  nextLevel: 100
}

const stats = (state = initialValue, action) => {
  switch(action.type) {
    case 'CHANGE_STAT':
      return Object.assign({}, state, {
        [action.payload.stat]: action.payload.value
      })
    default:
      return state;
  }
}

export default stats;