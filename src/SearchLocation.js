import React from 'react';
import location from './assets/images/location.svg'
import './index.scss';

function SearchLocation() {
  return(
  <div className="search">
    <img src={location} alt="location icon"/>
    <input placeholder="Find your mountain"/>
  </div>
  );
}

export default SearchLocation;
