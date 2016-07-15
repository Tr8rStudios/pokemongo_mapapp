import React, { Component } from 'react';
import MapView from 'react-native-maps';

class MapMyRide extends Component {
  render() {
    return (
      <MapView showsUserLocation={true} />//shows CurrentLocation
    );
  }
}


//returns pokemon number
function convertPokemontoNumber(name) {
  var lookup = {};
  for (var i = 0, len = array.length; i < len; i++) {
      lookup[array[i].id] = array[i];
  }
}
