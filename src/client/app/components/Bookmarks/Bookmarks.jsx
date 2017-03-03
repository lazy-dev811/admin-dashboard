import React, { PropTypes } from 'react';

import Card from './parts/Card.jsx';

import './Bookmarks.scss';

const Bookmarks = ({ bookmarkCategories }) => {
  const { subCategories } = bookmarkCategories[0];
  console.log(subCategories)

  return (
    <div className="bookmarks">
      <h2>{bookmarkCategories.category}</h2>

      {subCategories.map((subCategory) => {
        // console.log(subCategory);
        return (
          <Card
            title={subCategory.subCategory}
            bookmarks={subCategory.bookmarks}
          />
        );
      })}
    </div>
  );
};

Bookmarks.propTypes = {

};

export default Bookmarks;
