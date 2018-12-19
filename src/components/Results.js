import React from 'react';
import PropTypes from 'prop-types';
import allTheGifs from './../assets/weatherGifs/index';

function Results({ name, resortState, runs, liftsClosed, liftsOpen, website, description, gif, tempActual, tempFeelsLike, windSpeed }) {
  console.log(`./../assets/weatherGifs/${gif}`)
  return(
    <div className="resort-info">
      <h1 className="name">{name}</h1>
      <h3>{resortState}</h3>
      <h3>Runs: {runs}</h3>
      <p>{liftsClosed}</p>
      <p>{liftsOpen}</p>
      <p>{website}</p>
      <p>{description}</p>
      <img src={allTheGifs[gif]}/>
      <p>{tempActual}</p>
      <p>{tempFeelsLike}</p>
      <p>{windSpeed}</p>
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
