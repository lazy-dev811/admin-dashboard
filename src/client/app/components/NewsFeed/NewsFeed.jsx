import React, { Component, PropTypes } from 'react';

import Filters from './parts/Filters.jsx';
import List from './parts/List.jsx';

require('./NewsFeed.scss');

class NewsFeed extends Component {
  componentWillMount() {
    this.props.getSources();
  }

  render() {
    const { sources, activeSources, toggleActiveSource } = this.props;

    return (
      <div className="newsfeed">
        <div className="widget__header">
          News Feed

          <Filters />

          <ul className="newsfeed__view-options">
            <li className="newsfeed__view-options__option">
              <button className="newsfeed__view-options__option__btn is-active">
                sources
              </button>
            </li>
            <li className="newsfeed__view-options__option">
              <button className="newsfeed__view-options__option__btn">
                articles
              </button>
            </li>
          </ul>
        </div>
        <List sources={sources} activeSources={activeSources} toggleActiveSource={toggleActiveSource} />
      </div>
    );
  }
}

NewsFeed.defaultProps = {
  sources: [],
};

NewsFeed.propTypes = {
  sources: PropTypes.array.isRequired,
  activeSources: PropTypes.array,
  getSources: PropTypes.func.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
};

export default NewsFeed;
