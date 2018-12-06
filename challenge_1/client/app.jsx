import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Searchbar from './Searchbar';
import ResultList from './ResultList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      results: [],
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
    e.preventDefault();
    console.log(this.state.term);
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

