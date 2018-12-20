import React from 'react';
import PropTypes from 'prop-types';
import websiteIcon from './../assets/images/website.png';
import twitterIcon from './../assets/images/twitter.png';
import blackPic from './../assets/images/black_diamond.svg';
import dblBlackPic from './../assets/images/dbl_black.png';
import bluePic from './../assets/images/blue.svg';
import greenPic from './../assets/images/green.png';
import allTheGifs from './../assets/weatherGifs/index';

function Results({ name, resortState, runs, green, blue, black, dblBlack, liftsClosed, liftsOpen, website, twitter, description, gif, tempActual, tempFeelsLike, windSpeed }) {
  const totalLifts = liftsOpen + liftsClosed;
  return(
    <div className="resort-info">
      <div className="resort-header">
        <h1 className="name">{name}</h1>
      </div>
      <div className="resort-details">
        <div className="runs-info">
          <div className="ski-runs-box">
            <img className="ski-runs" src={greenPic} alt="green circle"/>
            <img className="ski-runs" src={bluePic} alt="blue square"/>
            <img className="ski-runs" src={blackPic} alt="black diamond"/>
            <img className="ski-runs" src={dblBlackPic} alt="double black diamond"/>
          </div>
          <h3 className="total-runs">{runs} total runs</h3>
          <p>{green}</p>
          <p>{blue}</p>
          <p>{black}</p>
          <p>{dblBlack}</p>
        </div>
        <div className="lifts-info">
          <h3>{totalLifts} total lifts</h3>
          <p>{liftsOpen} open ✔</p>
          <p>{liftsClosed} closed ✘</p>
        </div>
      </div>
      <div className="icons-box">
        <a href={website}><img className="icons" src={websiteIcon} alt="website"/></a>
        <a href={'https://twitter.com/' + twitter}><img className="icons" src={twitterIcon} alt="twitter"/></a>
      </div>
      <div className="weather-info">
        <p>{description}</p>
        <img src={allTheGifs[gif]}/>
        <p>temperature is {tempActual}°</p>
        <p>feels like {tempFeelsLike}°</p>
        <p>wind speed is {windSpeed} mph</p>
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
