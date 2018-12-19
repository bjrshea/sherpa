export default (state = {}, action) => {
  let newState;
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
   default: {
     return state;
   }
  }
}
