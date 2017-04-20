import React, { PropTypes } from 'react';

import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';

const Filters = ({
  categories,
  filteredCategories,
  toggleFilteredCategories,
  activeSources,
  filteredSources,
  toggleFilteredSources,
  activeView,
 }) => {
  let title = '';
  let options = [];
  let compareOptions = [];
  let onChange;

  if (activeView === 'sources') {
    title = 'filter by categories';
    options = categories;
    compareOptions = filteredCategories;
    onChange = toggleFilteredCategories;
  } else {
    title = 'filter by active sources';
    options = activeSources.map(source => source.id);
    compareOptions = filteredSources;
    onChange = toggleFilteredSources;
  }

  return (
    <div className="filters">
      <FormFieldSelect
        title={title}
        className="filters__filter"
        options={options}
        compareOptions={compareOptions}
        onChange={onChange}
      />
    </div>
  );
};

Filters.propTypes = {
  categories: PropTypes.array.isRequired,
  filteredCategories: PropTypes.array.isRequired,
  toggleFilteredCategories: PropTypes.func.isRequired,
  activeSources: PropTypes.array.isRequired,
  filteredSources: PropTypes.array.isRequired,
  toggleFilteredSources: PropTypes.func.isRequired,
  activeView: PropTypes.string.isRequired,
};

export default Filters;
