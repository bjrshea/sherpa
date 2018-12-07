import React from 'react';
import SearchLocation from './SearchLocation';
import mountains from './assets/images/background.svg';

function Hero() {
  return(
  <div>
    <div className="logo">
      <h1>Sherpa</h1>
      <h3>Your guide to resorts unknown...</h3>
    </div>
    <div>
      <SearchLocation/>
    </div>
    <div className="background">
      <img className="mountains" src={mountains} alt="mountains"/>
    </div>
  </div>
  );
}

export default Hero;
