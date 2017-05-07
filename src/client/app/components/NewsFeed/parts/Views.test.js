import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Views, {
  List,
  Item,
  Button,
} from './Views.jsx';

chai.use(chaiEnzyme());
chai.use(sinonChai);


const defaultProps = {
  views: [],
  activeSources: [],
  activeView: undefined,
  selectView() {},
};

const viewsProps = {
  views: ['sources', 'articles'],
};

const wrapper = additionalProps => shallow(<Views {...defaultProps} {...additionalProps} />);

describe('<Views />', () => {
  it('<List />', () => {
    expect(wrapper().find(List)).to.exist;
  });

  it('<Item /> display views that are passed in', () => {
    expect(wrapper().find(Item)).to.not.exist;
    expect(wrapper(viewsProps).find(Item)).to.exist;
  });

  describe('<Button />', () => {
    it('is disabled if !activeSources.length && view === articles', () => {
      expect(wrapper(viewsProps).find(Button).at(0)).to.have.prop('disabled', false);
      expect(wrapper(viewsProps).find(Button).at(1)).to.have.prop('disabled', true);
    });

    it('renders activeView prop', () => {
      const newProps = {
        ...viewsProps,
        activeView: 'articles',
      };
      expect(wrapper(newProps).find(Button).at(1)).to.have.prop('activeView', newProps.activeView);
    });

    it('renders activeView prop', () => {
      const newProps = {
        ...viewsProps,
        activeView: viewsProps.views[0],
      };
      expect(wrapper(newProps).find(Button).at(1)).to.have.prop('activeView', newProps.activeView);
    });

    it('handles selectView prop', () => {
      const sandbox = sinon.sandbox.create();
      const spyClick = sandbox.spy(defaultProps, 'selectView');
      wrapper(viewsProps).find(Button).at(0).simulate('click');
      expect(spyClick).to.have.been.calledOnce;
      sandbox.restore();
    });
  });
});
