import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFirebaseResorts } from './../actions';
import location from './../assets/images/location.svg'

function SearchLocation(props) {
  let _inputtedState = null;

  function handleResults() {
    const { dispatch } = props;
    dispatch(getFirebaseResorts(_inputtedState.value))
  }

  return(
  <div className="search">
    <input className="search-input" placeholder="Find your mountain" ref={(input) => {_inputtedState = input;}}/>
    <Link to="/results"><img onClick={handleResults} className="location-button" src={location} alt="location icon"/></Link>
  </div>
  );
}

export default connect()(SearchLocation);
