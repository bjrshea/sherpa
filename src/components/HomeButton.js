import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetState } from './../actions';
import home from './../assets/images/home.png'

function HomeButton(props) {

  function handleReset() {
    const { dispatch } = props;
    dispatch(resetState())
  }

  return(
  <div className="home-button-box">
    <Link to="/"><img className="home-button" onClick={handleReset} src={home} alt="home icon"/></Link>
  </div>
  );
}

export default connect()(HomeButton);
