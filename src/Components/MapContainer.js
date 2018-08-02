import React, { Component } from 'react';
import Map from './Map';

class MapContainer extends Component {
  render() {
    return (
      <Map
        zoom={this.props.zoom}
        inatialCenter={this.props.inatialCenter}
        places={this.props.places}
        infoWindow={this.props.infoWindow}
        showInfoWindow={this.props.showInfoWindow}
        closeInfowWindow={this.props.closeInfowWindow}
        googleMapURL={
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyAuj6bXV7GuDq9oGXfVGRDxS_6nLBSNkvo'
        }
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={
          <div
            className=""
            role="application"
            tabIndex={0}
            style={{
              height: `100vh`,
              width: `${window.innerWidth}px`,
            }}
          />
        }
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}

export default MapContainer;