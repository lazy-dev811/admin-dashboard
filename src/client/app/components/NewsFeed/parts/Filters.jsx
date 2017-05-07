import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SHAPE_ACTIVE_SOURCE } from '../prop-shapes';
import FormFieldSelect from '../../FormElements/FormFieldSelect/FormFieldSelect.jsx';

import { UNIT_MD, COLOR_WHITE_1 } from '../../../styles';


export const FiltersWrap = styled.div`
  display: flex;
  margin-right: ${UNIT_MD};
  padding-right: ${UNIT_MD};
  border-right: 1px solid ${COLOR_WHITE_1};
`;

export const Filter = styled(FormFieldSelect)`
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilteredCategories: PropTypes.func.isRequired,
  activeSources: PropTypes.arrayOf(SHAPE_ACTIVE_SOURCE).isRequired,
  filteredSources: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilteredSources: PropTypes.func.isRequired,
  activeView: PropTypes.string,
};

export default Filters;
