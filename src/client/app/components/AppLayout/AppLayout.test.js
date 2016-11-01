import React from 'react';
import { shallow } from 'enzyme';
import AppLayout from '../AppLayout/AppLayout.jsx';

it('renders AppLayout', () => {
  const wrapper = shallow(<AppLayout />);

  expect(wrapper).toExist;
});
