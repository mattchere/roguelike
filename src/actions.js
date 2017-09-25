export const changeMap = (coords, v) => {
  return {
    type: 'CHANGE_MAP',
    payload: [coords, v]
  }
}