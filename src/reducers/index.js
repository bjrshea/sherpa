import getLocationReducer from './getLocationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  resorts: getLocationReducer
});

export default rootReducer;
