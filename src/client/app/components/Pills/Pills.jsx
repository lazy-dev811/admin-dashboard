import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Loader, { SIZE_SMALL } from '../Loader';

import { UNIT_SM, UNIT_LG, COLOR_WHITE_5, COLOR_TEAL } from '../../styles';

const PillsWrap = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${UNIT_LG};
`;

const Label = styled.span`
  display: inline-flex;
  margin-right: ${UNIT_SM}
  color: ${COLOR_WHITE_5};
`;

const Pill = styled.button`
  display: inline-flex;
  margin-right: ${UNIT_SM};
  color: ${COLOR_TEAL};
`;

const Pills = ({ label, list, onClick, asyncStatus = {} }) => (
  <PillsWrap>
    {
      label &&
      <Label>{label}</Label>
    }
    <ul>
      {
        list.map((item, index) => <Pill onClick={() => onClick(item)} key={index}>{item}</Pill>)
      }
    </ul>
    {
      asyncStatus && asyncStatus.inProgress &&
      <div>
        <Loader size={SIZE_SMALL} alignVertical />
      </div>
    }
  </PillsWrap>
);

Pills.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object.isRequired,
};

export default Pills;
