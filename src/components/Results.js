import React from 'react';
import PropTypes from 'prop-types';

function Results({ name, resortState, runs }) {
  console.log(name)
  return(
  <div className="user-creds">
    <h1>{name}</h1>
    <h1>{resortState}</h1>
    <h1>{runs}</h1>
  </div>
  );
}

Results.propTypes = {
  name: PropTypes.string,
  resortState: PropTypes.string,
  runs: PropTypes.string,
}

export default Results;
