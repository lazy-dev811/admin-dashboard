import React, { PropTypes } from 'react';

import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';

const Filters = ({ categories, activeCategories, toggleActiveCategories }) => (
  <div className="filters">
    <FormFieldSelect
      title="filter"
      className="filters__filter"
      options={categories}
      compareOptions={activeCategories}
      onChange={toggleActiveCategories}
    />
  </div>
);

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  toggleActiveCategories: PropTypes.func.isRequired,
};

export default Filters;
