import * as actions from '../actions/actionList';
import { v4 } from 'uuid';

const initalstate = { list: [], showAdd: false, showEdit: false };

const newLocation = (state, newLocation) => {
    const LocationId = v4();
    return {
        ...state,
        list: [...state.list || {},
        {   id: LocationId, 
            name: newLocation.name,
            address: newLocation.address,
            lat: newLocation.lat,
            lon: newLocation.lon,
            category: newLocation.category, 
            selected: false }]
    };
}

const saveLocation = (state, updatedLocation) => {
    const updatedIndex = state.list.findIndex((loc => loc.id === updatedLocation.LocationId));
    const start = state.list.slice(0, updatedIndex);
    const end = state.list.slice(updatedIndex + 1, state.list.length);
    const updated = {
        id: updatedLocation.LocationId,
        name: updatedLocation.LocationName,
        address: updatedLocation.address,
        lat: updatedLocation.lat,
        lon: updatedLocation.lon,
        category:updatedLocation.category,
        selected: false
    };
    const newArray = start.concat([updated]).concat(end);
    return {
        ...state,
        list: newArray
    };
}

export default function reducer(state = initalstate, action = {}) {
    switch (action.type) {
        case actions.ADD_LOCATION:
            return ({ ...state, showAdd: true, showEdit: false });
        case actions.EDIT_LOCATION:
            const selectedLocation = state.list.map(loc => loc.selected)
            if (selectedLocation)
                return ({ ...state, showAdd: false, showEdit: true });
            return state;
        case actions.SAVE_LOCATION:
            if (!action.payload.LocationId)
                return newLocation(state, action.payload);
            else
                return saveLocation(state, action.payload);
        case actions.CLOSE_LOCATION_FORM:
            return ({ ...state, showAdd: false, showEdit: false,showMap:false });
        case actions.DELTE_LOCATION:
            const updatedList = state.list.filter(loc =>
                (!loc.selected)
            );
            return { list: updatedList };
        case actions.SET_LOCATION:
            const newList = state.list.map(loc => {
                return { ...loc, selected: (loc.id === action.payload) };
            });
            return {
                list: newList
            };
        case actions.SHOW_MAP:
            return ({...state,showMap:true}); 
        default:
            return state;
    }
}
