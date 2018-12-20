import React from 'react';
import PropTypes from 'prop-types';
import allTheGifs from './../assets/weatherGifs/index';

function Results({ name, resortState, runs, liftsClosed, liftsOpen, website, description, gif, tempActual, tempFeelsLike, windSpeed }) {
  return(
    <div className="resort-info">
      <div className="resort-header">
        <h1 className="name">{name}</h1>
        <h3>{resortState}</h3>
      </div>
      <div className="resort-details">
        <h2 className="resort-details-header">Resort Details</h2>
        <h3>Runs: {runs}</h3>
        <p>{liftsClosed}</p>
        <p>{liftsOpen}</p>
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
