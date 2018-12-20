import React from 'react';
import SearchLocation from './SearchLocation';
import cloud from './../assets/images/cloud.png';
import mountains from './../assets/images/background.svg';

function Hero() {
  console.log(mountains);
  return(
  <div>
    <div className="clouds">
      <img className="cloud" src={cloud} alt="mountains"/>
      <img className="cloud" src={cloud} alt="mountains"/>
      <img className="cloud" src={cloud} alt="mountains"/>
    </div>
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
