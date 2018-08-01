import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import Sidebar from './Components/Sidebar';
import places from './Components/places.js';


class App extends Component {
  state = {
    places,
    zoom: 7, // Default zoom
    inatialCenter: {lat: 53.530873, lng: -8.329037}, // Default place - middle of Ireland
    
  }
  render() {
    return (
      <div className="App">
        <MapContainer 
          zoom={this.state.zoom}
          inatialCenter={this.state.inatialCenter}
          places={this.state.places}
        />
        <Sidebar />

      </div>
    );
  }
}

export default App;
