import React, { Component } from 'react';
import Hero from './Hero';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Amatic SC', 'cursive']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
      </div>
    );
  }
}

export default App;
