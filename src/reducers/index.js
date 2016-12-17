import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import categories from './category';
import locations from './locations';

let rootReducer = combineReducers({
    categories,
    locations,
    routing: routerReducer,
    form: formReducer 
});

export default rootReducer;

