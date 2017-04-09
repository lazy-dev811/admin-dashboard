import React, { PropTypes } from 'react';

import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';

const Filters = () => {
  const filterOptions = ['filter by A', 'what about b', 'c', 'this is the last filter'];
  const sortOrderOptions = ['top', 'newest', 'best'];

  return (
    <div className="filters">
      <FormFieldSelect
        title="filters"
        id="filters"
        className="filters__filter"
        options={filterOptions}
        onChange={() => {}}
      />
      <FormFieldSelect
        title="sort order"
        id="sort-order"
        className="filters__filter"
        options={sortOrderOptions}
        onChange={() => {}}
      />
    </div>
  );
};

Filters.propTypes = {
  //
};

export default Filters
