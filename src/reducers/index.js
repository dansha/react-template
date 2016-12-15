import { combineReducers } from 'redux';
import operations from './operations';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import categories from './category';

let rootReducer = combineReducers({
    operations,
    categories,
    routing: routerReducer,
    form: formReducer 
});

export default rootReducer;

