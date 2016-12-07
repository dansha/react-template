import * as actions from '../actions/actionList';

export default function reducer(state={}, action={} ) {
    switch (action.type){
        case actions.DUMMY:
        default:
        return state;
    }
}

