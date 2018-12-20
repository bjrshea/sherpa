import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ResultsList from './ResultsList';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';

WebFont.load({
  google: {
    families: ['Amatic SC', 'cursive']
  }
});


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.resorts)
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Route exact path="/" component={Hero} />
          <Route exact path="/results" render={()=><ResultsList resorts={this.props.resorts}/>}/>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    resorts: state.resorts
  };
};

export default connect(mapStateToProps)(App);
