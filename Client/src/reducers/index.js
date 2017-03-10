import {combineReducers} from 'redux';
import UsersData from './reducer-user.js';
import Countries from './reducer-country.js';
import Activeuser from './reducer-activeuser.js';
const allReducers = combineReducers({
  Users : UsersData,
  Country : Countries,
  activeUser : Activeuser
});

export default allReducers;
