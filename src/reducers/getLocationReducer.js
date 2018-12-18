export default (state = {}, action) => {
  let newState;
  const { lat, lng, mtnId, name, runs, resortState } = action;
  switch(action.type) {
    case 'RECEIVE_ADDRESS':
      newState = Object.assign({}, state);
      newState[action.resort.id] = action.resort;
      return newState;
    default:
      return state;
  }
}
