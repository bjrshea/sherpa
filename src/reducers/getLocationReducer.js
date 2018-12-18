export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case 'RECEIVE_RESORTS':
      newState = Object.assign({}, state);
      newState = action.resorts;
      return newState;
    default:
      return state;
  }
}
