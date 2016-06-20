import React from 'react';
import { Link } from 'react-router';

class PageHeader extends React.Component {

  render() {
    return (
      <div>
        <header className="Header">
          <nav>
            <Link to="/src/client">Home</Link>
            <Link to="about">About</Link>
          </nav>
        </header>
      </div>
    );
  }

}

export default PageHeader;
