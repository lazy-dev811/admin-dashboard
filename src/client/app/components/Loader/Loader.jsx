import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { COLOR_TRANSPARENT } from '../../styles';
import { dark } from '../../themes';
import { SIZE_LARGE } from './styleOptions';
import Spinner from '../Icon/Spinner.jsx';

const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${COLOR_TRANSPARENT};
`;

const SpinnerStyled = styled(Spinner)`
  z-index: 1;
  position: absolute;
  width: ${props => props.size};
  ${props => props.alignCenter && (`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `)};
  ${props => props.alignHorizontal && (`
    left: 50%;
    transform: translateX(-50%);
  `)};
  ${props => props.alignVertical && (`
    top: 50%;
    left: auto;
    transform: translateY(-50%);
  `)};
  stroke: ${props => props.theme.main};
`;

const Loader = ({
  showOverlay = false,
  size = SIZE_LARGE,
  alignCenter = true,
  alignVertical = false,
  alignHorizontal = false,
}) => (
  <div>
    {
      showOverlay &&
      <Overlay />
    }
    <SpinnerStyled
      size={size}
      alignCenter={alignCenter}
      alignVertical={alignVertical}
      alignHorizontal={alignHorizontal}
    />
  </div>
);

Loader.propTypes = {
  showOverlay: PropTypes.bool,
  size: PropTypes.string,
  alignCenter: PropTypes.bool,
  alignVertical: PropTypes.bool,
  alignHorizontal: PropTypes.bool,
};

SpinnerStyled.defaultProps = {
  theme: dark,
};

export default Loader;
