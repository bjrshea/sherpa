import React from 'react';
import PropTypes from 'prop-types';

function Results({ name, resortState, runs }) {
  return(
    <div className="resort-info">
      <h1 className="name">{name}</h1>
      <h3>{resortState}</h3>
      <h3>Runs: {runs}</h3>
    </div>
  );
}

Results.propTypes = {
  name: PropTypes.string,
  resortState: PropTypes.string,
  runs: PropTypes.string,
}

export default Results;
