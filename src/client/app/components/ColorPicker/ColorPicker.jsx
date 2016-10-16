import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('./ColorPicker.scss');

const ColorPicker = ({ data: { colors, activeColorName }, selectColor }) => (
  <div className="pg-color-picker">
    <div className="pg-color-picker__toggle is-noob">
      <i className="icon icon-default isAbs icon-color-adjust" />
      <i className="icon icon-active isAbs icon-info" />
    </div>

    <ul className="pg-color-picker__list">
      {colors.map((color) => {
        const colorClass = classnames('pg-color-picker__list__item', { 'is-active': color.code === activeColorName });
        const colorStyle = { backgroundColor: color.code };

        return (
          <li
            className={colorClass}
            key={color.code}
            style={colorStyle}
            onClick={() => selectColor(color.code)}
          />
        );
      })}
    </ul>
  </div>
);

ColorPicker.propTypes = {
  data: PropTypes.object.isRequired,
  selectColor: PropTypes.func,
};

export default ColorPicker;
