import { combineReducers } from 'redux';
import auth from './auth';

const rootReudcer = combineReducers({ auth });

export default rootReudcer;
