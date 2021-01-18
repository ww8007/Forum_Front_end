import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
const rootReudcer = combineReducers({ auth, loading });

export default rootReudcer;
