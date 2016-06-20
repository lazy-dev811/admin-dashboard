import React, { PropTypes } from 'react';

const SomeComponent = ({name, children}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Children: {children}</p>
    </div>
  )
}

SomeComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
}

export default SomeComponent;
