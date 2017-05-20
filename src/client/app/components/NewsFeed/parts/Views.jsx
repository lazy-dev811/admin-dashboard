import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { VIEW_ARTICLES, VIEWS } from '../constants';

import { COLOR_TEAL } from '../../../styles';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Button = styled.button`
  padding-bottom: 1px;

  ${props => props.view === props.activeView && (`
    color: ${COLOR_TEAL};
    border-bottom: 1px solid ${COLOR_TEAL};
  `)};

  &:hover {
    color: ${COLOR_TEAL};
  }
`;

const Views = ({ views, activeSources, activeView, selectView }) => (
  <List>
    {
      views.map((view) => {
        const isDisabled = !activeSources.length && view === VIEW_ARTICLES;

        return (
          <Item key={view}>
            <Button
              view={view}
              activeView={activeView}
              disabled={isDisabled}
              onClick={() => selectView(view)}
            >
              {view}
            </Button>
          </Item>
        );
      })
    }
  </List>
);

Views.propTypes = {
  views: PropTypes.array.isRequired,
  activeSources: PropTypes.array.isRequired,
  activeView: PropTypes.string,
  selectView: PropTypes.func.isRequired,
};
Views.defaultProps = {
  views: VIEWS,
  activeSources: [],
  activeView: undefined,
  selectView() {},
};

export default Views;
export const { defaultProps } = Views;
