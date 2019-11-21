import {combineReducers} from 'redux';

import {reducer as data} from './data/data';
import {reducer as auth} from './user/user';


export default combineReducers({
  data,
  auth,
});
