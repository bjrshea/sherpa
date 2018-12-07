import React from 'react';
import mountains from './assets/images/background.svg'
import './index.scss';

function Hero() {
  return(
  <div>
    <div className="logo">
      <h1>Sherpa</h1>
    <h3>Your guide to resorts unknown...</h3>
    </div>
    <div className="background">
      <img src={mountains} alt="mountains"/>
    </div>
  </div>
  );
}

export default Hero;
