import React, { PropTypes } from 'react';

const List = ({ sources, toggleActiveSource }) => (
  <ul className="sources">
    {
      sources && sources.map(source => (
        <li className="sources__source" key={source.id}>
          <button className="sources__btn" onClick={() => toggleActiveSource(source)} />
          <img className="sources__source__img" src={source.urlsToLogos.small} alt="logo" />
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  sources: PropTypes.array.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
};

export default List;
