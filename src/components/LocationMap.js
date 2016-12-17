import React, { Component, PropTypes } from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import Marker from './MapMarker';

const LocationMap = (props) => {
  let {lat, lon } = props;
  lat = parseFloat(lat);
  lon = parseFloat(lon)
  
  const loc = { lat: lat, lng:lon  };

  return (
    <div style={{ width: '500px', height: '500px' }} >
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyD3Cs64YsoRGfErRy4Er5lBjBIe7qBakO4'
        }}
        center={loc}
        zoom={15}>
        <Marker lat={lat} lng={lon} text={'X'} />
      </GoogleMap>
    </div>
  );

}

LocationMap.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string,
}

export default LocationMap;
