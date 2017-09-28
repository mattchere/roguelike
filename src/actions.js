export const modifyMap = (coords, value) => {
  return {
    type: 'MODIFY_MAP',
    payload: {
      coords: coords,
      value: value
    }
  }
}

export const switchMap = (newMap) => {
  return {
    type: 'SWITCH_MAP',
    payload: {
      newMap: newMap
    }
  }
}

// export const changeStat = (stat, value) => {
//   return {
//     type: 'CHANGE_STAT',
//     payload: {
//       stat: stat,
//       value: value
//     }
//   }
// }

export const moveMap = (direction) => {
  return {
    type: 'MOVE_MAP',
    payload: {
      direction: direction
    }
  }
}