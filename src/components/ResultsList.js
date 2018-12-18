import React from 'react';
import Results from './Results'
import PropTypes from 'prop-types';

function ResultsList({ resorts }) {
  console.log(resorts)
  return(
    <div>
      {Object.keys(resorts).map(function(id) {
        var resort = resorts[id];
        return <Results key={id}
          name={resort.name}
          resortState={resort.resortState}
          runs={resort.runs}/>
      })}
    </div>
  );
}

ResultsList.propTypes = {
  resorts: PropTypes.object
}

export default ResultsList;
