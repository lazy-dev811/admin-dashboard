import React, { Component, PropTypes } from 'react';

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

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    const API_KEY='8b8fdbe46cc1b907383d8f937198939e';

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="field"
          placeholder="Get a 5 day forecast"
          value={this.state.searchTerm}
          onChange={(event => this.onInputChange(event.target.value))}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button className="btn" onClick={() => this.props.buttonClicked(this.state.searchTerm)}>
          REDUCER TEST
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  buttonClicked: PropTypes.func,
};

export default SearchBar;
