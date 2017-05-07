import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Sidebar.scss';

const Sidebar = ({ sidebarItems }) => (
  <div className="sidebar">
    <p className="sidebar__logo">
      openTab
    </p>
    <ul className="sidebar__list">
      {sidebarItems.map((item, index) => (
        <li className="sidebar__list__item" key={index}>
          <Link className="sidebar__list__item__link" to={item.url}>{item.name}</Link>
          {
            item.subItems &&
              <ul className="sidebar__sublist">
                {item.subItems.map((subItem, subItemIndex) => (
                  <li className="sidebar__sublist__item" key={subItemIndex}>
                    {subItem.name}
                  </li>
                ))}
              </ul>
          }
        </li>
      ))}
    </ul>
    <div className="sidebar__acknowledgements">
      <a
        href="https://github.com/vincentbollaert/react-dashboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <ul className="sidebar__apis">
        <li className="sidebar__apis__api">
          <a
            href="https://newsapi.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar__apis__api__link"
          >
            newsapi
          </a>
        </li>
        <li className="sidebar__apis__api">
          <a
            href="https://www.desktoppr.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar__apis__api__link"
          >
            desktoppr
          </a>
        </li>
        <li className="sidebar__apis__api">
          <a
            href="http://forismatic.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar__apis__api__link"
          >
            forismatic
          </a>
        </li>
      </ul>
    </div>
  </div>
);

Sidebar.propTypes = {
  sidebarItems: PropTypes.array.isRequired,
};

export default Sidebar;
