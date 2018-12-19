import React from 'react';
import SearchLocation from './SearchLocation';
import UserCreds from './UserCreds';
import mountains from './../assets/images/background2.svg';

function Hero() {
  return(
  <div>
    <div className="winter-is-coming">
      <div className="snow snow--near"></div>
      <div className="snow snow--near snow--alt"></div>
      <div className="snow snow--mid"></div>
      <div className="snow snow--mid snow--alt"></div>
      <div className="snow snow--far"></div>
      <div className="snow snow--far snow--alt"></div>
    </div>
    <UserCreds/>
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
