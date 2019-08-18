import React, { Component } from 'react';
import Chart from './component/charts.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        {<Chart/>}
      </div>
    );
  }
}

export default App;
