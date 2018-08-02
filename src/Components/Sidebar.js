import React, { Component } from 'react';

class Sidebar extends Component {
   state = {
      query: '',
      showingPlaces: this.props.places,
   }

   updateQuery = (query) => {
      this.setState({ query: query.trim() }); //trim() does not allow making space

      const showingPlaces = this.props.places.filter(place => {
         const placeNorm = place.name.toLowerCase()
         const queryNorm = query.toLowerCase()
         
         return (
            placeNorm.indexOf(queryNorm) !== -1 && placeNorm.startsWith(queryNorm)
         );
      });
      this.setState({ showingPlaces })
   }

   render() {
      return (
            <section>
               <h2>This is sidebar!</h2>
               <input 
                  type='text' role='search'
                  placeholder='Find an amazin place!'
                  input={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
               />
               <ol>
                  {this.state.showingPlaces.map(place => (
                    <li
                     key={place.id}
                    >{place.name}</li> 
                  ))}
               </ol>
            </section>
      )
   }
}

export default Sidebar;