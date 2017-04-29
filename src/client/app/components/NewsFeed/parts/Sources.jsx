import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Loader from '../../Loader/Loader';
import Pills from '../../Pills';

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

      <ul className="sources">
        {
          displayedSources.map((source) => {
            const sourceClass = classnames('sources__source', {
              'is-active': activeSources.findIndex(activeSource => activeSource.id === source.id) > -1,
            });

            return (
              <li className={sourceClass} key={source.id}>
                {
                  asyncStatus.toggleActiveSource.inProgress &&
                  source.id === toggledSource.id &&
                  <Loader />
                }

                <button className="sources__btn" onClick={() => toggleActiveSource(source)} />
                <img className="sources__source__img" src={source.logo} alt="logo" />

                <a href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sources__source__name"
                >
                  {source.name}
                </a>
              </li>
            );
          })
        }
      </ul>
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
