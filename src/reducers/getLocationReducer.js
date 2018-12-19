export default (state = {}, action) => {
  let newState;
  let liftieState;
  let weatherState;
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



// case 'RECEIVE_WEATHER':
// console.log(action.firebaseId)
// weatherState = Object.assign({}, state[action.firebaseId], {
//   ['weather']: {
//     tempFeelsLike: action.tempFeelsLike,
//     tempActual: action.tempActual,
//     windSpeed: action.windSpeed,
//     description: action.description,
//     gif: action.gif
//   }
// });
// newState = Object.assign({}, state, {
//   [action.firebaseId]: liftieState
// });
// return newState;
