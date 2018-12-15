import React from 'react';
import SearchLocation from './SearchLocation';
import UserCreds from './UserCreds';
import mountains from './../assets/images/background.svg';

function Hero() {
  return(
  <div>
    <div class="winter-is-coming">
      <div class="snow snow--near"></div>
      <div class="snow snow--near snow--alt"></div>
      <div class="snow snow--mid"></div>
      <div class="snow snow--mid snow--alt"></div>
      <div class="snow snow--far"></div>
      <div class="snow snow--far snow--alt"></div>
    </div>
    <UserCreds/>
    <div className="logo">
      <h1>Sherpa</h1>
      <h3>Your guide to resorts unknown...</h3>
    </div>
    <SearchLocation/>
    <div className="background">
      <img className="mountains" src={mountains} alt="mountains"/>
    </div>
  </div>
  );
}

export default Hero;
