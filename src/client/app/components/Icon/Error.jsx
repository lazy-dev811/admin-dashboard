import React, { PropTypes } from 'react';

const Error = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-error ${className}`}
    x="0px"
    y="0px"
    viewBox="0 0 510 510"
  >
    <g id="error">
      <path
        d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M280.5,
        382.5h-51v-51h51V382.5zM280.5,280.5h-51v-153h51V280.5z"
      />
    </g>
  </svg>
);

Error.propTypes = {
  className: PropTypes.string,
};

export default Error;
