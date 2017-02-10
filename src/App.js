import React, { Component } from 'react';
import AnalogClock from './components/AnalogClock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Analog Clock</h2>
        </div>
        <div className="App-body">
          <AnalogClock timezone="Europe/Zurich" />
          <AnalogClock timezone="Europe/London" />
        </div>
      </div>
    );
  }
}

export default App;
