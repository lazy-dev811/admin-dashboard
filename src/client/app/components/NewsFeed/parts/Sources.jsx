import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Loader from '../../Loader/Loader';

const Sources = ({
  sources,
  activeSources,
  toggledSource,
  toggleActiveSource,
  asyncStatus,
}) => {

  return (
    <ul className="sources">
      {
        sources && sources.map((source) => {
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
  );
};

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  activeSources: PropTypes.array,
  toggledSource: PropTypes.object,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default Sources;
