import { expect } from 'chai';

import {
  getFilteredSourcesFailed as getFilteredSourcesFailedAction,
} from './actions';

import reducer, {
  INITIAL_STATE,
  getFilteredSourcesFailed,
} from './reducer';

const state = INITIAL_STATE;

describe.only('reducer test', () => {
  it('getFilteredSourcesFailed', () => {
    expect(reducer(state, getFilteredSourcesFailedAction())).to.deep.equal(getFilteredSourcesFailed(state));
  });
});
