import React, { PropTypes } from 'react';
import TopNav from './TopNavView'
import LocationView from './LocationView';
import { Modal } from 'react-bootstrap';
import LocationForm from './LocationForm';
import Map from './LocationMap.js';

const mapVisible = (showMap) => {
    if ((showMap !== null) && (typeof showMap === 'object'))
        return true;
    return false;
}

const LocationsListView = props => {
    const { onAddClicked, onDeleteClicked, onEditClicked, onCloseFormClicked,
        onSaved, onRowClicked, onMapClicked, locationsList, showForm,
        formInitalValues, categories, showMapFor } = props;

    let rows = [];
    if (locationsList) {
        locationsList.forEach((loc) => {
            rows.push(<LocationView location={loc} key={loc.id} onSelectClicked={onRowClicked} onMapClicked={onMapClicked} />);
        });
    }
    return (
        <div>
            <TopNav onAdd={onAddClicked} onDelete={onDeleteClicked} onEdit={onEditClicked} full={true}/>
            <div className="container">
                <div className="row">
                    <table className="table " id="locationTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Lon</th>
                                <th>Lat</th>
                                <th>Category</th>
                                <th>Map</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <Modal show={showForm} onHide={onCloseFormClicked} >
                        <Modal.Header closeButton>
                            <Modal.Title>Location</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <LocationForm onSubmit={onSaved} onClose={onCloseFormClicked} initialValues={formInitalValues} categories={categories} />
                        </Modal.Body>
                    </Modal>
                </div>
                <div className="row">
                    <Modal show={mapVisible(showMapFor)} onHide={onCloseFormClicked} >
                        <Modal.Header closeButton>
                            <Modal.Title>Map</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Map lat={showMapFor && showMapFor.lat} lon={showMapFor && showMapFor.lon}/>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
}



LocationsListView.propTypes = {
    onAddClicked: PropTypes.func.isRequired,
    onDeleteClicked: PropTypes.func.isRequired,
    onEditClicked: PropTypes.func.isRequired,
    onCloseFormClicked: PropTypes.func.isRequired,
    onSaved: PropTypes.func.isRequired,
    onMapClicked: PropTypes.func.isRequired,
    showMapFor: PropTypes.object,
    locationsList: PropTypes.array.isRequired,
    showForm: PropTypes.bool,
    formInitalValues: PropTypes.object,
    categories: PropTypes.array.isRequired
}

export default LocationsListView;