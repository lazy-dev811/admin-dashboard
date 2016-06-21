import React, { PropTypes } from 'react';

import AppHeader from './AppHeader.jsx';

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppHeader />

      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any,
}

export default AppLayout;
