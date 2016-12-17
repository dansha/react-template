import React, { PropTypes } from 'react';

const LocationView = (props) => {
    const {location, onSelectClicked, onMapClicked} = props;
    return (
        <tr onClick={() => {
            onSelectClicked(location.id)
        }
        }
            className={location.selected ? "warning" : ""}>
            <th scope="row">{location.id}</th>
            <td>{location.name}</td>
            <td>{location.address}</td>
            <td>{location.lon}</td>
            <td>{location.lat}</td>
            <td>{location.category}</td>
            <td><button className="btn btn-primary" onClick={
                (e) => {
                    e.stopPropagation();
                    onMapClicked(location.lon,location.lat);
                }
            } >map</button></td>
        </tr>
    );
};

LocationView.propTypes = {
    location: PropTypes.object.isRequired,
    onSelectClicked: PropTypes.func.isRequired,
    onMapClicked: PropTypes.func.isRequired,

}

export default LocationView;