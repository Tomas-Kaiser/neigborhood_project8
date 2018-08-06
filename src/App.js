import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import Sidebar from './Components/Sidebar';
import places from './Components/places.js';
import { slide as Menu } from 'react-burger-menu'



class App extends Component {
  state = {
    places,
    zoom: 6, // Default zoom
    inatialCenter: {lat: 53.530873, lng: -8.329037}, // Default place - middle of Ireland
    infoWindow: '', // Active infoWindow
    imgs: [],  // Photos from unsplash
    imgsUser: [],
    imgsUserLink: [],
    selectedImg: '',
    hasError: false,
    errorFetch: ''
    
  }
  
  // Showing infowindow func
  showInfoWindow = (place) => {
    this.setState({
      infoWindow: place.id,
      selectedImg: place.name
    });
   

    if (!this.state.selectedImg.hasOwnProperty)
    this.fetchData();
  }
  // Closing infowindow func
  closeInfowWindow = () => {
    this.setState({
      infoWindow: '',
      selectedImg: ''
    });
  }

  // Filtering markers according to input / search
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

  // Fethich data from Unsplas API
  componentDidUpdate = () => {
    this.fetchData()
  }

    fetchData = () => {
      const searchedForText = this.state.selectedImg;
      const unsplashKey = '461e85d44d4c08f58f37c36959d0207a4753c976252ab45d4c6bcac355d473cf';

      fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
        headers: {Authorization: 'Client-ID ' + unsplashKey}
      }).then(res => res.json())
      .then(this.addImage)
      .catch(err => {console.log('Error happened during fetching', err)
      })      
    }

    addImage = (data) => {
      this.setState({
          imgs: data.results[0].urls,
          imgsUser: data.results[0].user,
          imgsUserLink: data.results[0].user.links.html
        });
      //console.log('Success!');    
    }

    // If an error
    componentDidCatch(error) {
      this.setState({ hasError: true });
    }

  render() {
    let style={
      bmCrossButton: {
        height: '24px',
        width: '24px',
        right: '40px',
        padding: '10px'
      }
    }
    return (
      <div className="App">
        {!this.state.hasError && (
         <MapContainer 
            zoom={this.state.zoom}
            inatialCenter={this.state.inatialCenter}
            places={this.state.places}
            infoWindow={this.state.infoWindow}
            showInfoWindow={this.showInfoWindow}
            closeInfowWindow={this.closeInfowWindow}
            imgs={this.state.imgs}
            imgsUser={this.state.imgsUser}
            imgsUserLink={this.state.imgsUserLink}
            errorFetch={this.state.errorFetch}
          />
        )}
        {this.state.hasError && (
          <h2>Ops, something went wrong!</h2>
        )}

        <Menu
          styles={style}
        >
          <Sidebar 
            places={this.state.places}
            filterMarkers={this.filterMarkers}
            showInfoWindow={this.showInfoWindow}
          />
        </Menu>

      </div>
    );
  }
}

export default App;
