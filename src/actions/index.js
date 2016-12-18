import * as actions from './actionList';

export const addCategory = () => (
    { type: actions.ADD_CATEGORY });

export const saveCategory = (category) => (
    {
        type: actions.SAVE_CATEGORY,
        payload: category
    });

export const closeCategoryForm = () => ({
    type: actions.CLOSE_CATEGORY_FORM
});
export const deleteCurrentCategory = () => ({
    type: actions.DELTE_CATEGORY
});
export const setCategory = (id) => ({
    type: actions.SET_CATEGORY,
    payload: id
});
export const editCategory = () => ({
    type: actions.EDIT_CATEGORY
});
export const addLocation = () => ({
    type: actions.ADD_LOCATION
});
export const saveLocation = (location) => ({
    type: actions.SAVE_LOCATION,
    payload: location
});
export const closeLocationForm = () => ({
    type: actions.CLOSE_LOCATION_FORM
});
export const deleteCurrentLocation = () => ({
    type: actions.DELTE_LOCATION
});
export const setLocation = (id) => ({
    type: actions.SET_LOCATION,
    payload: id
});
export const editLocation = () => (
    { type: actions.EDIT_LOCATION }
);
export const showMap = (lat, lon) => ({
    type: actions.SHOW_MAP,
    payload: { lat: lat, lon: lon }
});
export const orderLocations = (order) => ({
    type: actions.ORDER_LOCATIONS,
    payload: order
});
export const filterLocations = (category) => ({
    type: actions.FILTER_LOCATIONS,
    payload: category
});






