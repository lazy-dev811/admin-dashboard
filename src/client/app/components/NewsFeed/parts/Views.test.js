import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { VIEW_SOURCES, VIEW_ARTICLES } from '../default-props';

import Views, {
  defaultProps,
  List,
  Item,
  Button,
} from './Views.jsx';

chai.use(chaiEnzyme());
chai.use(sinonChai);


const wrapper = additionalProps => shallow(<Views {...defaultProps} {...additionalProps} />);
describe('<Views />', () => {
  it('<List />', () => {
    expect(wrapper().find(List)).to.exist;
  });

  it('<Item />', () => {
    expect(wrapper().find(Item)).to.exist;
  });

  describe('<Button />', () => {
    it('renders view prop', () => {
      expect(wrapper().find(Button).at(0)).to.have.prop('view', VIEW_SOURCES);
      expect(wrapper().find(Button).at(1)).to.have.prop('view', VIEW_ARTICLES);
    });

    it('renders activeView prop', () => {
      expect(wrapper({ activeView: VIEW_SOURCES }).find(Button).at(0)).to.have.prop('activeView', VIEW_SOURCES);
      expect(wrapper({ activeView: VIEW_ARTICLES }).find(Button).at(0)).to.have.prop('activeView', VIEW_ARTICLES);
    });

    it('renders disabled prop. is disabled if !activeSources.length && view === articles', () => {
      expect(wrapper().find(Button).at(0)).to.have.prop('disabled', false);
      expect(wrapper().find(Button).at(1)).to.have.prop('disabled', true);
      expect(wrapper({ activeSources: ['recode'] }).find(Button).at(1)).to.have.prop('disabled', false);
    });

    it('renders activeView prop', () => {
      const newProps = {
        activeView: 'articles',
      };
      expect(wrapper(newProps).find(Button).at(1)).to.have.prop('activeView', newProps.activeView);
    });

    it('handles selectView prop method', () => {
      const sandbox = sinon.sandbox.create();
      const spyClick = sandbox.spy(defaultProps, 'selectView');
      wrapper().find(Button).at(0).simulate('click');
      expect(spyClick).to.have.been.calledOnce;
      sandbox.restore();
    });
  });
});
