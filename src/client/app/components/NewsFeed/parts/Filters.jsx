import React, { PropTypes } from 'react';

import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';

const Filters = ({ categories, activeCategories, sortOptions, selectCategory, selectSort }) => (
  <div className="filters">
    <FormFieldSelect
      title="filter"
      className="filters__filter"
      options={categories}
      compareOptions={activeCategories}
      onChange={selectCategory}
    />
    <FormFieldSelect
      title="sort"
      className="filters__filter"
      options={sortOptions}
      onChange={selectSort}
    />
  </div>
);

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  sortOptions: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectSort: PropTypes.func.isRequired,
};

export default Filters;
