import React, { Component } from 'react';
import axios from 'axios';
import transformToTimeSeries from '../utils/transformToTimeSeries';
import Chart from './Chart';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      startDate: '',
      endDate: '',
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => transformToTimeSeries(data.bpi))
      .then(timeSeries => this.setState({ data: timeSeries }))
      .catch(console.log);
  }

  inputChangeHandler(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  formSubmitHandler(e) {
    const { startDate, endDate } = this.state;
    e.preventDefault();
    if (startDate.length !== 0 && endDate.length !== 0) {
      axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
        .then(({ data }) => transformToTimeSeries(data.bpi))
        .then(timeSeries => this.setState({ data: timeSeries }))
        .catch(console.log);
    }
  }

  render() {
    const { data, startDate, endDate } = this.state;
    return (
      <div>
        <Header
          startDate={startDate}
          endDate={endDate}
          inputChangeHandler={this.inputChangeHandler}
          formSubmitHandler={this.formSubmitHandler}
        />
        <Chart data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
