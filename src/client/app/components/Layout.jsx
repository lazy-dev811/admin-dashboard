import React, { PropTypes } from 'react';

import PageHeader from './PageHeader.jsx';

const Layout = ({children}) => {
  return (
    <div>
      <PageHeader />

      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout;
