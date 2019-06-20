import { createStore } from 'redux';
import user from './user';
import { combineReducers } from 'redux';
const reducers = {
    user
};
const store = createStore(reducers);
export default store;