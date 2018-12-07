import React from 'react';
import mountains from './assets/images/background.svg'
import './index.scss';

function Hero() {
  return(
    <div className="background">
      <img src={mountains} alt="mountains"/>
    </div>
  );
}

export default Hero;
