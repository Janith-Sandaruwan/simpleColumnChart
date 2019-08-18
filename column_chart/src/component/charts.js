import React, { Component } from 'react';
import '../App.css';

class Chart extends Component {
  render() {
    const available = {
      height : "70%"
    };

    const completed = {
      height : "50%"
    };

    const progress = {
      height : "30%"
    };

    return (
        <div className="chartContainer">
          <div className="barContainers">
            <div className="first" style={available}></div>
            <span className="text"><p>Available</p></span>
          </div>
          <div className="barContainers">
            <div className="second" style={completed}></div>
            <span className="text"><p>Completed</p></span>
          </div>
          <div className="barContainers">
            <div className="third" style={progress}></div>
            <span className="text"><p>Progress</p></span>
          </div>
        </div>
    );
  }
}

export default Chart;
