import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { COLOR_TEAL } from '../../../styles';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

const Button = styled.button`
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
        const isDisabled = !activeSources.length && view === 'articles';

        return (
          <Item key={view}>
            <Button
              onClick={() => selectView(view)}
              disabled={isDisabled}
              view={view}
              activeView={activeView}
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

export default Views;
