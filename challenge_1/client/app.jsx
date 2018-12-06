import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  render() {
    return (
      <div>
        <p>Events go here!</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

