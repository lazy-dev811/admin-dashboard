import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { U, COLOR_GRAY_1 } from '../../../styles';
import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';


const FiltersWrap = styled.div`
  display: flex;
  margin-right: ${() => U * 3}px;
  padding-right: ${() => U * 3}px;
  border-right: 1px solid ${COLOR_GRAY_1};
`;

const Filter = styled(FormFieldSelect)`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

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
    <FiltersWrap>
      <Filter
        title={title}
        options={options}
        compareOptions={compareOptions}
        onChange={onChange}
      />
    </FiltersWrap>
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
