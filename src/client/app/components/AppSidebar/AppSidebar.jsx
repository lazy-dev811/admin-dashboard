import React, { PropTypes } from 'react';

require('./AppSidebar.scss');

const AppSidebar = () => {
  const sidebarItems = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'More',
      subItems: [
        {
          name: 'SubItem1',
        },
        {
          name: 'SubItem2',
        }
      ]
    }
  ]
  return (
    <div className='pgSidebar'>
    {/* //  ng-className='{ 'is-active': showSidebar }'> */}

      <ul className='pgSidebar__list'>
        {sidebarItems.map(item => {
          return (
            <li className='pgSidebar__list__item'>
              {item.name}
              {
                item.subItems &&
                <ul className='pgSidebar__sublist'>
                  {item.subItems.map(subItem => {
                    return (
                      <li className='pgSidebar__sublist__item'>
                        {subItem.name}
                      </li>
                    );
                  })}
                </ul>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppSidebar;
