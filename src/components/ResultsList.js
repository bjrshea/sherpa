import React from 'react';
import Results from './Results'
import PropTypes from 'prop-types';

function ResultsList({ resorts }) {
  return(
    <div className="results-container">
      {Object.keys(resorts).map(function(id) {
        var resort = resorts[id];
        return <Results key={id}
          name={resort.resortInfo.name}
          resortState={resort.resortInfo.resortState}
          runs={resort.resortInfo.runs}
          liftsClosed={resort.liftie.liftsClosed}
          liftsOpen={resort.liftie.liftsOpen}
          website={resort.liftie.website}
          description={resort.weather.description}
          gif={resort.weather.gif}
          tempActual={resort.weather.tempActual}
          tempFeelsLike={resort.weather.tempFeelsLike}
          windSpeed={resort.weather.windSpeed}
          />
      })}
    </div>
  );
}

ResultsList.propTypes = {
  resorts: PropTypes.object
}

export default ResultsList;
