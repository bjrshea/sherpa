import React from 'react';
import { Link } from 'react-router-dom';
import home from './../assets/images/home.png'

function HomeButton() {
  return(
  <div className="home-button-box">
    <Link to="/"><img className="home-button" src={home} alt="home icon"/></Link>
  </div>
  );
}

export default HomeButton;
