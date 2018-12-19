export default (state = {}, action) => {
  let newState;
  let liftieState;
  switch(action.type) {
    case 'RECEIVE_RESORTS':
      newState = Object.assign({}, state);
      newState[action.resorts.id] = action.resorts;
      return newState;
    case 'RECEIVE_LIFTIE':
      liftieState = Object.assign({}, state[action.firebaseId], {
        ['liftie']: {
          website: action.website,
          liftsOpen: action.liftsOpen,
          liftsClosed: action.liftsClosed
        }
      });
      newState = Object.assign({}, state, {
        [action.firebaseId]: liftieState
      });
      return newState;
    default:
      return state;
  }
}
