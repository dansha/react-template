import React, { Component } from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import Marker from './MapMarker';

export default class LocationMap extends Component {
  static defaultProps = {
    center: { lat: 59.938043, lng: 30.337157 },
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  };

  //shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div style={{width:'500', height:'500'}} >
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyD3Cs64YsoRGfErRy4Er5lBjBIe7qBakO4'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <Marker lat={59.955413} lng={30.337844} text={'X'}  />
        </GoogleMap>
      </div>
    );
  }
}
