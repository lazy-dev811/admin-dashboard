import React, { PropTypes } from 'react';
import classnames from 'classnames';

// <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
const Spinner = ({ className }) => {
  const svgClass = classnames('svg svg-spinner', {
    [className]: className,
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
      viewBox="0 0 38 38"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity="0.3" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
