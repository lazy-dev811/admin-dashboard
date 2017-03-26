import React, { PropTypes } from 'react';

import './Card.scss';

const Card = ({ title, bookmarks }) => (
  <div className="card">
    <div className="card__title">{title}</div>
    <ul className="card__items">
      {bookmarks.map((bookmark, key) => (
        <li className="card__item" key={key}>
          <div className="card__item__favicon" />
          <a href={bookmark.url} className="card__item__title">{bookmark.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  bookmarks: PropTypes.array,
};

export default Card;
