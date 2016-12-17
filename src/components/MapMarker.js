import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

import {mapMarkerStyle} from  './mapMarkerStyle';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={mapMarkerStyle}>
          {this.props.text}
       </div>
    );
  }
}