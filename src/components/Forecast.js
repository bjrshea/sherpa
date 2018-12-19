import React from 'react';
import PropTypes from 'prop-types';

function Results({ name, resortState, runs, liftsClosed, liftsOpen, website, description, gif, tempActual, tempFeelsLike, windSpeed }) {
  return(
    <div className="resort-info">
      <p>{liftsClosed}</p>
      <p>{liftsOpen}</p>
      <p>{website}</p>
      <p>{description}</p>
      <p>{gif}</p>
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
