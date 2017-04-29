import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Loader from '../../Loader/Loader';
import Pills from '../../Pills';

import { UNIT_XSM, COLOR_TEAL, COLOR_WHITE, COLOR_WHITE_4, COLOR_BLACK_3 } from '../../../styles';

const SourcesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -${UNIT_XSM};
`;

const Source = styled.li`
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

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Name = styled.a`
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

const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Sources = ({
  sources = [],
  activeSources,
  visibleSources = [],
  filteredCategories = [],
  toggleFilteredCategories = () => {},
  toggledSource,
  toggleActiveSource,
  asyncStatus,
}) => {
  const displayedSources = visibleSources.length > 0 ? visibleSources : sources;

  return (
    <div>
      {
        filteredCategories &&
        <Pills
          label="active categories"
          list={filteredCategories}
          onClick={toggleFilteredCategories}
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
  sources: PropTypes.array.isRequired,
  activeSources: PropTypes.array.isRequired,
  visibleSources: PropTypes.array.isRequired,
  filteredCategories: PropTypes.array.isRequired,
  toggleFilteredCategories: PropTypes.func.isRequired,
  toggledSource: PropTypes.object.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default Sources;
