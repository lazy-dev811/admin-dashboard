import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { UNIT_SM, UNIT_LG, COLOR_GRAY_5, COLOR_TEAL } from '../../styles';

const PillsWrap = styled.div`
  display: flex;
  margin-bottom: ${UNIT_LG};
`;

const Label = styled.span`
  display: inline-flex;
  margin-right: ${UNIT_SM}
  color: ${COLOR_GRAY_5};
`;

const Pill = styled.button`
  display: inline-flex;
  margin-right: ${UNIT_SM};
  color: ${COLOR_TEAL};

  &:last-child {
    margin-right: 0;
  }
`;

const Pills = ({ label, list, onClick }) => (
  <PillsWrap>
    {
      label &&
      <Label>{label}</Label>
    }
    <ul>
      {
        list.map(item => <Pill onClick={() => onClick(item)}>{item}</Pill>)
      }
    </ul>
  </PillsWrap>
);

Pills.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pills;
