import * as actions from '../actions/actionList';

export default function reducer(state={}, action={} ) {
    switch (action.type){
        case actions.SET_OPERATION:
            return ({action: action.payload});
        default:
        return state;
    }
}

