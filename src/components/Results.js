import React from 'react';
import PropTypes from 'prop-types';
import websiteIcon from './../assets/images/website.png';
import twitterIcon from './../assets/images/twitter.png';
import allTheGifs from './../assets/weatherGifs/index';

function Results({ name, resortState, runs, liftsClosed, liftsOpen, website, description, gif, tempActual, tempFeelsLike, windSpeed }) {
  return(
    <div className="resort-info">
      <div className="resort-header">
        <h1 className="name">{name}</h1>
      </div>
      <div className="resort-details">
        <h2 className="resort-details-header">Resort Details</h2>
        <h3>{runs} total runs</h3>
        <p>{liftsClosed}</p>
        <p>{liftsOpen}</p>
        <div className="icons-box">
          <img className="icons" src={websiteIcon} alt="website"/>
          <img className="icons" src={twitterIcon} alt="twitter"/>
        </div>
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
