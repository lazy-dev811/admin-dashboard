import React from 'react';
import { Link } from 'react-router';

class AppHeader extends React.Component {

  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <Link className="header__link" to="/src/client">Home</Link>
            <Link className="header__link" to="about">About</Link>
          </nav>
        </header>
      </div>
    );
  }

}

export default AppHeader;
