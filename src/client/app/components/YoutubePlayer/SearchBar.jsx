import React, { PropTypes } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'reactjs',
    };
  }

  handleChange(searchQuery) {
    this.setState({
      searchQuery,
    });
    this.props.onSearchQueryChange(searchQuery);
  }

  render() {
    return (
      <div className="col-md-12 youtube-player__search-bar">
        <input
          className="input"
          type="text"
          value={this.state.searchQuery}
          onChange={event => this.handleChange(event.target.value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchQueryChange: PropTypes.func,
};

export default SearchBar;
