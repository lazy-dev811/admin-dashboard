import React, { Component } from 'react';

class SearchBar extends Component {
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

  render() {
    return (
      <form className="input-group">
        <input
          className="input"
          placeholder="Get a 5 day forecast"
          value={this.state.searchTerm}
          onChange={(event => this.onInputChange(event.target.value))}
        />
        <button type="submit" className="btn">
          SearchSDSDSD
        </button>
      </form>
    );
  }
}

export default SearchBar;
