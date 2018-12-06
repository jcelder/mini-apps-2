import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    );
  }
}

export default App;
