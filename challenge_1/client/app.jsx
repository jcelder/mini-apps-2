import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Searchbar from './Searchbar';
import ResultList from './ResultList';
import ReactPaginate from 'react-paginate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      results: [],
      page: 1,
      resultCount: null
    }

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitButtonHandler = this.submitButtonHandler.bind(this);
  }

  inputChangeHandler(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }

  submitButtonHandler(e) {
    const { term } = this.state;
    e.preventDefault();
    axios.get(`/events?q=${term}&_page=1&_limit=10`)
      .then((results) => {
        console.log(results);
        this.setState({
          results: results.data,
          resultCount: results.headers['x-total-count'],
        })
      })
      .catch(e => console.log(e));
  }

  render() {
    const { term, results } = this.state;
    return (
      <div>
        <Searchbar
          searchTerm={term}
          inputChangeHandler={this.inputChangeHandler}
          submitButtonHandler={this.submitButtonHandler}
        />
        <ResultList results={results} />
        <ReactPaginate />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

