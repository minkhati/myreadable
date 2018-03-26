import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './Categories';


import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Categories />
      </div>
    );
  }
}

export default App;
