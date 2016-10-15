import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'capetown',
    };
  }

  onInputChange(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  onSubmitTest(event, searchTerm) {
    const onSubmit = this.props.onSubmit;
    event.preventDefault();
    onSubmit(searchTerm);
  }

  render() {
    return (
      <form className="input-group" onSubmit={(event => this.onSubmitTest(event, this.state.searchTerm))}>
        <input
          className="input"
          placeholder="Get a 5 day forecast"
          value={this.state.searchTerm}
          onChange={(event => this.onInputChange(event.target.value))}
        />
        <button type="submit" className="btn">
          Search for city
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
