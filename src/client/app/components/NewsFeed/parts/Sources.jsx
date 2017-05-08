import React from 'react';
import { string, func, arrayOf } from 'prop-types';
import styled from 'styled-components';

import {
  SHAPE_SOURCE,
  SHAPE_ACTIVE_SOURCE,
  SHAPE_VISIBLE_SOURCE,
  SHAPE_TOGGLED_SOURCE,
  SHAPE_ASYNC_STATUS,
} from '../prop-shapes';

import Loader from '../../Loader';
import Pills from '../../Pills';

import { UNIT_XSM, COLOR_TEAL, COLOR_WHITE, COLOR_WHITE_4, COLOR_BLACK_3 } from '../../../styles';

export const SourcesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -${UNIT_XSM};
`;

export const Source = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${UNIT_XSM};
  padding: ${UNIT_XSM};
  width: 100px;
  height: 100px;
  box-shadow: inset 0 0 0 2px ${COLOR_WHITE_4};

  &:hover {
    box-shadow: 0 0 0 2px ${COLOR_BLACK_3};

    .name {
      display: flex;
    }
  }

  ${props => props.activeSources.findIndex(activeSource => activeSource.id === props.source.id) > -1 && (`
    box-shadow: 0 0 0 2px ${COLOR_BLACK_3};
  `)}
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Name = styled.a`
  display: none;
  position: absolute;
  bottom: 0;
  text-align: center;
  justify-content: center;
  line-height: 1;
  padding: ${UNIT_XSM};
  width: 100%;
  font-size: 12px;
  color: ${COLOR_WHITE};
  background-color: ${COLOR_BLACK_3};

  &:hover {
    background-color: ${COLOR_TEAL};
    color: ${COLOR_WHITE};
    box-shadow: 0 0 0 2px ${COLOR_TEAL};
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Sources = ({
  sources = [],
  activeSources = [],
  visibleSources = [],
  filteredCategories = [],
  toggleFilteredCategories = () => {},
  toggledSource,
  toggleActiveSource,
  asyncStatus,
}) => {
  const displayFilters = filteredCategories.length > 0;
  const displayedSources = visibleSources.length > 0 ? visibleSources : sources;

  return (
    <div>
      {
        displayFilters &&
        <Pills
          label="active categories"
          list={filteredCategories}
          onClick={toggleFilteredCategories}
          asyncStatus={asyncStatus.toggleFilteredCategory}
        />
      }

      <SourcesList>
        {
          displayedSources.map(source => (
            <Source
              activeSources={activeSources}
              source={source}
              key={source.id}
            >
              {
                asyncStatus.toggleActiveSource.inProgress &&
                source.id === toggledSource.id &&
                <Loader />
              }

              <Button onClick={() => toggleActiveSource(source)} />
              <Img src={source.logo} alt="logo" />

              <Name className="name"
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.name}
              </Name>
            </Source>
          ))
        }
      </SourcesList>
    </div>
  );
};

Sources.propTypes = {
  sources: arrayOf(SHAPE_SOURCE).isRequired,
  activeSources: arrayOf(SHAPE_ACTIVE_SOURCE),
  visibleSources: arrayOf(SHAPE_VISIBLE_SOURCE),
  filteredCategories: arrayOf(string),
  toggleFilteredCategories: func.isRequired,
  toggledSource: SHAPE_TOGGLED_SOURCE,
  toggleActiveSource: func.isRequired,
  asyncStatus: SHAPE_ASYNC_STATUS,
};

Sources.defaultProps = {
  sources: [],
  activeSources: [],
  visibleSources: [],
  filteredCategories: [],
  toggleFilteredCategories() {},
  toggledSource: {},
  toggleActiveSource() {},
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,

    getFilteredSources: {
      inProgress: false,
    },

    getFilteredCategories: {
      inProgress: false,
    },

    toggleActiveSource: {
      inProgress: false,
    },

    toggleFilteredCategory: {
      inProgress: false,
    },

    toggleFilteredSource: {
      inProgress: false,
    },
  },
};

export default Sources;
export const defaultProps = Sources.defaultProps;
