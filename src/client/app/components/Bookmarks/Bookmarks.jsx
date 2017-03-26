import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Card from './parts/Card.jsx';

import './Bookmarks.scss';

const Bookmarks = ({ categories, onTabChange }) => {
  const categoryTitles = categories.map(category => ({
    label: category.category,
    active: category.active,
  }));
  const activeCategory = categories.filter(category => category.active)[0];

  return (
    <div className="bookmarks">
      <div className="bookmarks__labels">
        {categoryTitles.map((category, key) => {
          const titlesClass = classnames('bookmarks__labels__label', {
            active: category.active,
          });

          return (
            <div className={titlesClass} onClick={() => onTabChange(category.label)} key={key}>
              {category.label}
            </div>
          );
        })}
      </div>

      <div className="bookmarks__content">
        {activeCategory.subCategories.map(tabContent => (
          <Card title={tabContent.subCategory} bookmarks={tabContent.bookmarks} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  categories: PropTypes.any.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Bookmarks;
