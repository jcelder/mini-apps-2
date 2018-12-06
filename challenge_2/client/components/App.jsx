import React, { Component } from 'react';
import axios from 'axios';
import transformToTimeSeries from '../utils/transformToTimeSeries';
import Chart from './Chart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => transformToTimeSeries(data.bpi))
      .then(timeSeries => this.setState({ data: timeSeries }))
      .catch(console.log);
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart data={data} />
      </div>
    );
  }
}

export default App;
