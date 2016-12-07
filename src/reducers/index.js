import { combineReducers } from 'redux';
import dummy from './dummy';
import { routerReducer } from 'react-router-redux'


let rootReducer = combineReducers({
    dummy: dummy,
    routing: routerReducer 
});

export default rootReducer;

