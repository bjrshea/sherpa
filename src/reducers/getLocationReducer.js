export default (state = {}, action) => {
  let newState;
  let resetState
  let liftieState;
  switch(action.type) {
    case 'RECEIVE_RESORTS': {
      newState = Object.assign({}, state, {
        [action.resorts.id]: {}
      });
      liftieState = Object.assign({}, newState[action.resorts.id], {
        ['resortInfo']: action.resorts,
        ['liftie']: {
          website: action.website,
          twitter: action.twitter,
          liftsOpen: action.liftsOpen,
          liftsClosed: action.liftsClosed
        },
        ['weather']: {
          tempFeelsLike: action.tempFeelsLike,
          tempActual: action.tempActual,
          windSpeed: action.windSpeed,
          description: action.description,
          gif: action.gif
        }
      });
      newState = Object.assign({}, state, {
        [action.resorts.id]: liftieState
      });
      return newState;
    }
    case 'RESET_STATE': {
      resetState = Object.assign({}, newState, {});
      return resetState;
    }
   default: {
     return state;
   }
  }
}
