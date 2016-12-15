import * as actions from '../actions/actionList';
import { v4 } from 'uuid';

const initalstate = { list: [], showAdd: false, showEdit: false };

const newCategory = (state, newCategory) => {
    
    const categoryId = v4();
    return {
        ...state,
        list: [...state.list || {},
        { id: categoryId, name: newCategory.CategoryName, selected: false }]
    };
}

const saveCategory = (state, updatedCategory) => {
    const updatedIndex = state.list.findIndex((cat => cat.id===updatedCategory.CategoryId ));
    const start = state.list.slice(0,updatedIndex);
    const end = state.list.slice(updatedIndex+1, state.list.length);
    const updated = {   id: updatedCategory.CategoryId,
                        name: updatedCategory.CategoryName,
                        selected:false };
    const newArray = start.concat([updated]).concat(end);
    return {
        ...state,
        list: newArray
    };
}

export default function reducer(state = initalstate, action = {}) {
    switch (action.type) {
        case actions.ADD_CATEGORY:
            return ({ ...state, showAdd: true, showEdit: false });
        case actions.EDIT_CATEGORY:
            const selectedCategory = state.list.map(cat => cat.selected)
            if (selectedCategory)
                return ({ ...state, showAdd: false, showEdit: true });
            return state;
        case actions.SAVE_CATEGORY:
            if (!action.payload.CategoryId)
                return newCategory(state, action.payload);
            else
                return saveCategory(state, action.payload);
        case actions.CLOSE_CATEGORY_FORM:
            return ({ ...state, showAdd: false, showEdit: false });
        case actions.DELTE_CATEGORY:
            const updatedList = state.list.filter(cat =>
                (!cat.selected)
            );
            return { list: updatedList };
        case actions.SET_CATEGORY:
            const newList = state.list.map(cat => {
                return { ...cat, selected: (cat.id === action.payload) };
            });
            return {
                list: newList
            };
        default:
            return state;
    }
}
