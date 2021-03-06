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
    let list = state.locations.list.slice(0);
    if(state.locations.filter){
        if (state.locations.filter)
            list=list.filter( loc => loc.category=== state.locations.filter);
    }
    if (state.locations.order==='alpha'){
        let res=1;
        list.sort( (a,b) => {
            if (a.name<b.name) 
                res = - 1;
            return res;
        });
    }
    return ({
        locationsList: list,
        showForm: state.locations.showAdd || state.locations.showEdit,
        formInitalValues: initalValues,
        categories: state.categories.list,
        showMapFor: state.locations.showMap

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
        onMapClicked : (lat,lon) =>{
            dispatch(actions.showMap(lat,lon));       
        },
        onOrder: (order) =>{
            dispatch(actions.orderLocations(order));
        },
        onFilter: category =>{
            dispatch (actions.filterLocations(category));
        }
    }
}

const Locations = connect(mapStateToProps, mapDispatchToProps)(LocationsView);

export default Locations;