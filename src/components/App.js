import React, { Component } from 'react';
import Hero from './Hero';
import Results from './Results';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Amatic SC', 'cursive']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Hero} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
