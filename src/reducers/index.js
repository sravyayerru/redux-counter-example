import {combineReducers} from 'redux';

import CounterReducer from './CounterReducer';

const AppReducer=combineReducers({
    CounterReducer
})

export default AppReducer;