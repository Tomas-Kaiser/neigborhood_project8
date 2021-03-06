import React, { Component } from 'react';
import Map from './Map';

function MapContainer(props) {
    return (
      <Map
        zoom={props.zoom}
        inatialCenter={props.inatialCenter}
        places={props.places}
        infoWindow={props.infoWindow}
        showInfoWindow={props.showInfoWindow}
        closeInfowWindow={props.closeInfowWindow}
        imgs={props.imgs}
        imgsUser={props.imgsUser}
        imgsUserLink={props.imgsUserLink}
        errMsg={props.errMsg}
        googleMapURL={
          `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`
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

export default MapContainer;