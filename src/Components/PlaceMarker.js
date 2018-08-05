import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class PlaceMarker extends Component {
  render() {
    let showInfo = this.props.visible && this.props.infoWindow === this.props.place.id

  return (
    <Marker
      position={this.props.place.position}
      visible={this.props.place.visible}
      onClick={() => this.props.showInfoWindow(this.props.place)}
    >
      {showInfo && (
        <InfoWindow
          key={this.props.place.id}
          onCloseClick={this.props.closeInfowWindow}
        >
         <React.Fragment>
            <h1>{this.props.place.name}</h1>
            <img src={this.props.imgs.small} />
          </React.Fragment>

        </InfoWindow>
      )}
    </Marker>
    );
  }
}

export default PlaceMarker;