import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Spinner from '../Icon/Spinner.jsx';

import './Loader.scss';

const Loader = ({ className = '', showOverlay }) => {
  const spinnerClass = classnames('', {
    'theme-dark': showOverlay,
    [className]: className,
  });

  return (
    <div>
      {
        showOverlay &&
        <div className="overlay" />
      }
      <Spinner className={spinnerClass} />
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  showOverlay: PropTypes.bool,
};

export default Loader;
