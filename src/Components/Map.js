import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props => {
   const inatialCenter = props.inatialCenter;
   const zoom = props.zoom
   const markers = props.places.map(place => (
      <PlaceMarker 
         key={place.id}
         visible={place.visible}
         place={place}
      />
   ))

   return (
      <GoogleMap zoom={zoom} center={inatialCenter}>
         {markers}
      </GoogleMap>
      )
   }
));

export default Map;