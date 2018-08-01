import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import Sidebar from './Components/Sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />

      </div>
    );
  }
}

export default App;
