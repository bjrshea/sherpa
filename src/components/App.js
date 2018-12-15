import React, { Component } from 'react';
import Hero from './Hero';
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
      <router>
        <div className="App">
          <Hero/>
        </div>
      </router>
    );
  }
}

export default App;
