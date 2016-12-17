import { connect } from 'react-redux';
import LocationsView from '../components/LocationsListView';
import * as actions from '../actions';

const getSelectedLocation = state => {
    const selected = state.locations.list.filter((location => location.selected));
    return selected[0];
}

const mapStateToProps = (state) => {
    let initalValues = {};

    if (state.locations.showEdit) {
        const currentLocation = getSelectedLocation(state);
        if (currentLocation) {
            initalValues = {
                name: currentLocation.name,
                id: currentLocation.id,
                address: currentLocation.address,
                lat:currentLocation.lat,
                lon: currentLocation.lon,
                category: currentLocation.category
            };
        }
    }
    return ({
        locationsList: state.locations.list,
        showForm: state.locations.showAdd || state.locations.showEdit,
        formInitalValues: initalValues,
        categories: state.categories.list

    });
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClicked: () => {
            dispatch(actions.addLocation());
        },
        onDeleteClicked: () => {
            dispatch(actions.deleteCurrentLocation());
        },
        onEditClicked: () => {
            dispatch(actions.editLocation());
        },
        onCloseFormClicked: () => {
            dispatch(actions.closeLocationForm());
        },
        onSaved: (values) => {
            dispatch(actions.saveLocation(values));
            //todo repalce with thunk (async)
            dispatch(actions.closeLocationForm())
        },
        onRowClicked: (id) => {
            dispatch(actions.setLocation(id));
        },
        onMapClicked : () =>{
            
        }
    }
}

const Locations = connect(mapStateToProps, mapDispatchToProps)(LocationsView);

export default Locations;