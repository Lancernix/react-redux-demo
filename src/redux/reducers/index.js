import { combineReducers } from 'redux';
import company from './company';
import jerry from './jerry';

const allReducers = combineReducers({
  company,
  jerry,
});

export default allReducers;
