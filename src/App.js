import React, { Component } from 'react';
import './App.css';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UncontrolledLottie />
        <ControlledLottie />
      </div>
    );
  }
}

export default App;
