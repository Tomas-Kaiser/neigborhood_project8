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
    infoWindow: '', // Active infoWindow
    imgs: []  // Photos from unsplash
    
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

    componentDidMount = () => {
      this.fetchData();
      
    }

    fetchData = () => {
      const searchedForText = 'Cliffs of Moher';
      const unsplashKey = '461e85d44d4c08f58f37c36959d0207a4753c976252ab45d4c6bcac355d473cf';

      fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
        headers: {Authorization: 'Client-ID ' + unsplashKey}
      }).then(res => res.json())
      .then(this.addImage)
      .catch(err => {console.log('Error happened during fetching', err)})

      
    }

    addImage = (data) => {
      this.setState({imgs: data});
      console.log('Success!');
      
    }

 /* componentDidMount = () => {
    const unsplashKey = '461e85d44d4c08f58f37c36959d0207a4753c976252ab45d4c6bcac355d473cf';
    fetch('https://api.unsplash.com/photos/?client_id=' + unsplashKey)
          .then(res => res.json())
          .then(data => {this.setState({ imgs: data });
        })
          .catch(err => {console.log('Error happened during fetching', err);
        });
  } */

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
          imgs={this.state.imgs}
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
