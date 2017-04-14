import React, { PropTypes } from 'react';

import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';

const Filters = ({ categories, activeCategories, selectCategory }) => (
  <div className="filters">
    <FormFieldSelect
      title="filter"
      className="filters__filter"
      options={categories}
      compareOptions={activeCategories}
      onChange={selectCategory}
    />
  </div>
);

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default Filters;
