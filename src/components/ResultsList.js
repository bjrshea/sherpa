import React from 'react';
import Results from './Results'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ResultsList({ resorts }) {
  return(
    <div className="results-container">
      <div className="winter-is-coming">
        <div className="snow snow--near"></div>
        <div className="snow snow--near snow--alt"></div>
        <div className="snow snow--mid"></div>
        <div className="snow snow--mid snow--alt"></div>
        <div className="snow snow--far"></div>
        <div className="snow snow--far snow--alt"></div>
      </div>
      {Object.keys(resorts).map(function(id) {
        var resort = resorts[id];
        return <Results key={id}
          name={resort.resortInfo.name}
          resortState={resort.resortInfo.resortState}
          runs={resort.resortInfo.runs}
          green={resort.resortInfo.green}
          blue={resort.resortInfo.blue}
          black={resort.resortInfo.black}
          dblBlack={resort.resortInfo.dbl_black}
          liftsClosed={resort.liftie.liftsClosed}
          liftsOpen={resort.liftie.liftsOpen}
          website={resort.liftie.website}
          twitter={resort.liftie.twitter}
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
