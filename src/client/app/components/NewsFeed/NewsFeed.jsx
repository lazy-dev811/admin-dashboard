import React, { Component, PropTypes } from 'react';

import List from './parts/List.jsx';

require('./NewsFeed.scss');

class NewsFeed extends Component {
  componentWillMount() {
    this.props.getSources();
  }

  render() {
    const { sources, toggleActiveSource } = this.props;

    return (
      <div className="newsfeed">
        <div className="widget__header">
          News Feed
          <ul className="newsfeed__view-options">
            <li className="newsfeed__view-options__option">
              <button>
                sources
              </button>
            </li>
            <li className="newsfeed__view-options__option">
              <button>
                articles
              </button>
            </li>
          </ul>
        </div>
        <List sources={sources} toggleActiveSource={toggleActiveSource} />
      </div>
    );
  }
}

NewsFeed.defaultProps = {
  sources: [],
};

NewsFeed.propTypes = {
  sources: PropTypes.array.isRequired,
  getSources: PropTypes.func.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
};

export default NewsFeed;
