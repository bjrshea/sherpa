import getLocationReducer from './getLocationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  states: getLocationReducer
});

export default rootReducer;
