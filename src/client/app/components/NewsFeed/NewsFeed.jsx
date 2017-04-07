import React, { Component, PropTypes } from 'react';

import List from './parts/List.jsx';

require('./NewsFeed.scss');

class NewsFeed extends Component {
  componentWillMount() {
    // this.props.gethNewsFeeds();
  }

  render() {
    const { newsfeeds, removeNewsFeed } = this.props;

    return (
      <div className="newsfeed">
        hey im header
        <List newsfeeds={newsfeeds} removeNewsFeed={removeNewsFeed} />
      </div>
    );
  }
}

NewsFeed.defaultProps = {
  newsfeeds: [],
};

NewsFeed.propTypes = {
  newsfeeds: PropTypes.array.isRequired,
  gethNewsFeeds: PropTypes.func.isRequired,
  removeNewsFeed: PropTypes.func.isRequired,
};

export default NewsFeed;
