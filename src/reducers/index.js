import getLocationReducer from './getLocationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  locations: getLocationReducer
});

export default rootReducer;
