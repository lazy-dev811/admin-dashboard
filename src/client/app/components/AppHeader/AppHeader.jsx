import React, { PropTypes } from 'react';
import { Link } from 'react-router';

require('./AppHeader.scss');

const AppHeader = () => (
  <header className="header">
    <nav>
      <Link className="header__link" to="/src/client">Home</Link>
      <Link className="header__link" to="about">About</Link>
    </nav>
  </header>
);

AppHeader.PropTypes = {
  //
};

export default AppHeader;
