import React from 'react';
import PropTypes from 'prop-types';
import websiteIcon from './../assets/images/website.png';
import twitterIcon from './../assets/images/twitter.png';
import black_diamond from './../assets/images/black_diamond.svg';
import blue from './../assets/images/blue.svg';
import green from './../assets/images/green.png';
import allTheGifs from './../assets/weatherGifs/index';

function Results({ name, resortState, runs, liftsClosed, liftsOpen, website, twitter, description, gif, tempActual, tempFeelsLike, windSpeed }) {
  const totalLifts = liftsOpen + liftsClosed;
  return(
    <div className="resort-info">
      <div className="resort-header">
        <h1 className="name">{name}</h1>
      </div>
      <div className="resort-details">
        <div className="runs-info">
          <h3>{runs} total runs</h3>
          <div className="ski-runs-box">
            <img className="ski-runs" src={black_diamond} alt="black_diamond"/>
            <img className="ski-runs" src={blue} alt="blue square"/>
            <img className="ski-runs" src={green} alt="green circle"/>
          </div>
        </div>
        <div className="lifts-info">
          <h3>{totalLifts} total lifts</h3>
          <p>Lifts open: {liftsOpen}</p>
          <p>Lifts closed: {liftsClosed}</p>
        </div>
      </div>
      <div className="icons-box">
        <a href={website}><img className="icons" src={websiteIcon} alt="website"/></a>
        <a href={'https://twitter.com/' + twitter}><img className="icons" src={twitterIcon} alt="twitter"/></a>
      </div>
      <div className="weather-info">
        <p>{description}</p>
        <img src={allTheGifs[gif]}/>
        <p>{tempActual}</p>
        <p>{tempFeelsLike}</p>
        <p>{windSpeed}</p>
      </div>
    </div>
  );
}

Results.propTypes = {
  name: PropTypes.string,
  resortState: PropTypes.string,
  runs: PropTypes.string,
}

export default Results;

// remove .gif from gif and store in let
// allTheGife.{let}
