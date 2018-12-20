import React from 'react';
import PropTypes from 'prop-types';
import allTheGifs from './../assets/weatherGifs/index';

function Forecast({ description, gif, tempActual, tempFeelsLike, windSpeed }) {
  return(
    <div className="resort-info">
      <p>{description}</p>
      <img src={allTheGifs[gif]}/>
      <p>{tempActual}</p>
      <p>{tempFeelsLike}</p>
      <p>{windSpeed}</p>
    </div>
  );
}

// Results.propTypes = {
//   name: PropTypes.string,
//   resortState: PropTypes.string,
//   runs: PropTypes.string,
// }

export default Forecast;
