import React from 'react';
import { Link } from 'react-router';

require('./AppSidebar.scss');

const AppSidebar = () => {
  const sidebarItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'More',
      url: '',
      subItems: [
        {
          name: 'SubItem1',
        },
        {
          name: 'SubItem2',
        },
      ],
    },
  ];

  return (
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
        {/* <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="about">About</Link> */}
      </ul>
    </div>
  );
};

export default AppSidebar;
