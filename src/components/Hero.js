import React from 'react';
import SearchLocation from './SearchLocation';
import bird from './../assets/images/bird.gif';
import mountains from './../assets/images/background2.svg';

function Hero() {
  console.log(mountains);
  return(
  <div>
    <div className="logo">
      <h1>Sherpa</h1>
      <h3>your ski resort guide...</h3>
    </div>
    <SearchLocation/>
    <div className="background">
      <div className="container">
        <img className="mountains" src={mountains} alt="mountains"/>
      </div>
    </div>
  </div>
  );
}

export default Hero;
