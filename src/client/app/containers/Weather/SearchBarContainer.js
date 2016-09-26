import React, { Component } from 'react';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }
  onInputChange(searchTerm) {
    console.log(searchTerm);
    this.setState({
      searchTerm,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="input"
          placeholder="Get a 5 day forecast"
          value={this.state.searchTerm}
          onChange={(event => this.onInputChange(event.target.value))}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBarContainer;
