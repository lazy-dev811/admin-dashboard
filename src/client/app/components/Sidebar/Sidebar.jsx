import React, { PropTypes } from 'react';
import { Link } from 'react-router';

require('./Sidebar.scss');

const Sidebar = ({ loggedIn, sidebarItems }) => (
  <div className="pgSidebar">
    <ul className="pgSidebar__list">
      {sidebarItems.map((item, index) => (
        <li className="pgSidebar__list__item" key={index}>
          <Link className="pgSidebar__list__item__link" to={item.url}>{item.name}</Link>
          {
            item.subItems &&
              <ul className="pgSidebar__sublist">
                {item.subItems.map((subItem, subItemIndex) => (
                  <li className="pgSidebar__sublist__item" key={subItemIndex}>
                    {subItem.name}
                  </li>
                ))}
              </ul>
          }
        </li>
      ))}
    </ul>
    <ul className="pgSidebar__login-options">
      <li className="pgSidebar__login-option">
        {loggedIn ? 'Logout' : 'Login'}
      </li>
    </ul>
  </div>
);

Sidebar.propTypes = {
  loggedIn: PropTypes.bool,
  sidebarItems: PropTypes.array.isRequired,
};

export default Sidebar;
