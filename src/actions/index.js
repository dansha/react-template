import * as actions from './actionList';

export function setOperation(operation){
    return {
        type:actions.SET_OPERATION,
        payload: operation
        };
}

export const addCategory = ()=>(
    {type:actions.ADD_CATEGORY });

export const saveCategory =  (category) => (
    {   
        type: actions.SAVE_CATEGORY,
        payload: category
    });

export const closeCategoryForm = () =>({
    type: actions.CLOSE_CATEGORY_FORM
});

export const deleteCurrentCategory = () => ({
        type: actions.DELTE_CATEGORY
    });

export  const setCategory = (id) => ({
        type: actions.SET_CATEGORY,
        payload:id
    });

export const editCategory = ()=>(
    {type:actions.EDIT_CATEGORY });



