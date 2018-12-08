import React from 'react';
import location from './assets/images/location.svg'

function SearchLocation() {
  return(
  <div className="search">
    <img className="location-button" src={location} alt="location icon"/>
    <input className="search-input"placeholder="Find your mountain"/>
  </div>
  );
}

export default SearchLocation;
