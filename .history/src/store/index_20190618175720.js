import { createStore } from 'redux';
import user from './user';
import { combineReducers } from 'redux';
const reducers = combineReducers({
    user
});
const store = createStore(reducers);
windows.store = store;
export default store;