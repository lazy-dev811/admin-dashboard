import React, { PropTypes } from 'react';

import ChevronLeft from '../Icon/ChevronLeft.jsx';
import ChevronRight from '../Icon/ChevronRight.jsx';

require('./Slider.scss');

const Slider = ({ sliderItems }) => (
  <div className="slider-wrap">
    <div className="slider-arrow slider-arrow--prev js-slide-prev">
      <ChevronLeft className="slider-arrow__icon" />
    </div>
    <div className="slider-arrow slider-arrow--next js-slide-next">
      <ChevronRight className="slider-arrow__icon" />
    </div>

    <ul className="slider">
      {sliderItems.map((app, index) => (
        <li className="slider__slide" key={index}>
          <div className="slider__slide__title">
            {app}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Slider.propTypes = {
  sliderItems: PropTypes.array.isRequired,
};

export default Slider;
