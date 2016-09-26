import React, { PropTypes } from 'react';

require('./ColorPicker.scss');

const ColorPicker = ({ colors }) => (
  <div className="pg-color-picker">
   {/* ng-className="{ 'is-active': options.model.showColorPicker.value }"> */}

    <div className="pg-color-picker__toggle is-noob">
     {/* data-title="Hold down to set default and stop slider"> */}
      <i className="icon icon-default isAbs icon-color-adjust"></i>
      <i className="icon
                icon-active
                isAbs
                icon-info">
       </i>
    </div>

    <ul className="pg-color-picker__list">
      {colors.map((color, index) => {
        return (
          <li className="pg-color-picker__list__item" key={index}>
           {/* ng-repeat="color in colors track by $index"
           ng-className="{ 'is-active': color.code === currentBackground.code }"
           ng-mousedown="selectColor(color, $event, $index)"
           ng-mouseup="selectColorMouseUp(color, $event, $index)"
           ng-style="{ 'backgroundColor': color.code }"> */}
          </li>
        );
      })}
    </ul>
  </div>
)

ColorPicker.propTypes = {
  colors: PropTypes.array,
};

export default ColorPicker;
