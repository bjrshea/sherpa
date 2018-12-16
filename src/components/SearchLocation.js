import React from 'react';
import location from './../assets/images/location.svg'

function handleResults() {
  console.log("test");
}

function SearchLocation() {
  return(
  <div className="search">
    <input className="search-input"placeholder="Find your mountain"/>
    <img onClick={handleResults} className="location-button" src={location} alt="location icon"/>
  </div>
  );
}

export default SearchLocation;
