import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Egg Timer</h1>
        <h2>This is a very connected Egg Timer</h2>
        <div className="eggtimer__container">
          <div className="eggtimer__timeleft">
            {"THE TIME LEFT"}
          </div>
        </div>
        <button>
          Start
        </button>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
