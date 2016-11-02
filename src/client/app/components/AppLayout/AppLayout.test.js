import React from 'react';
import { shallow } from 'enzyme';

import AppLayout from './AppLayout.jsx';
import AppSidebar from '../AppSidebar/AppSidebar.jsx';

describe('AppLayout component', () => {
  let wrapper;

  it('renders AppLayout', () => {
    wrapper = shallow(<AppLayout />);

    expect(wrapper).toExist;
  });

  it('renders AppLayout components', () => {
    wrapper = shallow(<AppLayout />);

    expect(wrapper.find(AppSidebar)).toExist;
  });
});
