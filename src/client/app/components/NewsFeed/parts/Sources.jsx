import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Sources = ({ sources, activeSources, toggleActiveSource }) => {

  return (
    <ul className="sources">
      {
        sources && sources.map((source) => {
          const sourceClass = classnames('sources__source', {
            'is-active': activeSources.findIndex(activeSource => activeSource.id === source.id) > -1,
          });

          return (
            <li className={sourceClass} key={source.id}>
              <button className="sources__btn" onClick={() => toggleActiveSource(source)} />
              <img className="sources__source__img" src={source.urlsToLogos.small} alt="logo" />
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
  toggleActiveSource: PropTypes.func.isRequired,
};

export default Sources;
