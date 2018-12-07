import React, { Component } from 'react';
import fetchData from '../utils/fetchData';
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
    this.fetchCoinDesk();
  }

  fetchCoinDesk() {
    const { startDate, endDate } = this.state;

    fetchData(startDate, endDate)
      .then(({ data }) => this.setState({ data }))
      .catch(console.log);
  }

  inputChangeHandler(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  formSubmitHandler(e) {
    e.preventDefault();
    this.fetchCoinDesk();
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
