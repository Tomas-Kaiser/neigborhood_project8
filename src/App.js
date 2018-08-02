import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import Sidebar from './Components/Sidebar';
import places from './Components/places.js';


class App extends Component {
  state = {
    places,
    zoom: 6, // Default zoom
    inatialCenter: {lat: 53.530873, lng: -8.329037}, // Default place - middle of Ireland
    infoWindow: '' // Active infoWindow
    
  }

  showInfoWindow = place => {
    this.setState({infoWindow: place.id});
  }

  closeInfowWindow = () => {
    this.setState({infoWindow: ''});
  }

  filterMarkers = showingPlaces => {
    let updatedPlaces = JSON.parse(JSON.stringify(this.state.places));
    updatedPlaces.forEach(place => {
      if (showingPlaces.find(pl => pl.id === place.id))
        place['visible'] = true;
      else
        place['visible'] = false;
    });
    this.setState({ places: updatedPlaces })
  }

  render() {
    return (
      <div className="App">
        <MapContainer 
          zoom={this.state.zoom}
          inatialCenter={this.state.inatialCenter}
          places={this.state.places}
          infoWindow={this.state.infoWindow}
          showInfoWindow={this.showInfoWindow}
          closeInfowWindow={this.closeInfowWindow}
        />
        <Sidebar 
          places={this.state.places}
          filterMarkers={this.filterMarkers}
          showInfoWindow={this.showInfoWindow}
        />

      </div>
    );
  }
}

export default App;
