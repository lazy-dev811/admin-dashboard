import React, { PropTypes } from 'react';

const List = ({ newsfeeds, removeNewsFeed }) => (
  <ul className="newsfeeds">
    {
      newsfeeds && newsfeeds.map(newsfeed => (
        <li className="newsfeeds__item" key={newsfeed.id} onClick={() => removeNewsFeed(newsfeed.id)}>
          <span className="newsfeeds__item__title">{newsfeed.title}</span>
          <span className="newsfeeds__item__category">{newsfeed.categories}</span>
          I AM A NEWS FEED BOOM BABY
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  newsfeeds: PropTypes.array.isRequired,
  removeNewsFeed: PropTypes.func.isRequired,
};

export default List;
