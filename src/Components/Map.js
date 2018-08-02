import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import PlaceMarker from './PlaceMarker';

const Map = withScriptjs(withGoogleMap(props => {
   const inatialCenter = props.inatialCenter;
   const zoom = props.zoom
   const markers = props.places.map(place => (
      <PlaceMarker 
         key={place.id}
         visible={place.visible}
         place={place}
         infoWindow={props.infoWindow}
         showInfoWindow={props.showInfoWindow}
      />
   ));

   return (
      <GoogleMap zoom={zoom} center={inatialCenter}>
         {markers}
      </GoogleMap>
      )
   }
));

export default Map;