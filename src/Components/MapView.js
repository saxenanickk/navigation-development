import React, { Component } from 'react';
import polyline from '@mapbox/polyline';
import { mapStyle } from './MapLayers';

export default class Map extends React.Component {

  render() {
    return (
      <MapView
        customMapStyle={mapStyle}
        style={[styles.map, this.props.map]}
        showsUserLocation
        followUserLocation
        region={this.props.region}
        onRegionChange={this.props.onRegionChange}>
        {this.renderMarker()}
        {this.props.showPath ?
          <MapView.Polyline
            coordinates={this.props.coords}
            strokeWidth={4}
            strokeColor="#000000" /> : null}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    borderWidth: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -10
  }
});