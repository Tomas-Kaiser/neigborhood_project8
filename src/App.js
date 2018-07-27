import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />

        <Sidebar />
      </div>
    );
  }
}

export default App;
