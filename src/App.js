import React, { Component } from 'react';
import Usestate from './Usestate';
import UseEffect from './UseEffect'

class App extends Component {
  render() {
    return (
      <>
        <p>UseState</p>
        <Usestate/>
        <hr/>
        <p>UseEffect</p>
        <UseEffect/>
      </>
    );
  }
}

export default App;