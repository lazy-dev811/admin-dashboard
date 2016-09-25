import React, { PropTypes } from 'react';

require('./Slider.scss');

const Slider = ({ apps }) => (
  <div className="slider-wrap">
    <div className="slider-arrow slider-arrow--prev js-slide-prev">
      {/* ng-className="{ 'disabled' : firstSlide }"
      ng-click="slideNavigate('prev')"> */}
      <i className="icon icon-left-open slider-arrow__icon"></i>
    </div>
    <div className="slider-arrow slider-arrow--next js-slide-next">
     {/* ng-className="{ 'disabled' : lastSlide }"
     ng-click="slideNavigate('next')"> */}
      <i className="icon icon-right-open slider-arrow__icon"></i>
    </div>

    <ul className="slider">
      {apps.map(app => {
        return (
          <li ng-repeat="person in population track by $index"
            className="slider__slide">
            {/* ng-className="{ 'is-active': person._id === selectedPerson._id }"
            ng-click="selectPerson(person)"> */}
            <div className="slider__slide__title">
              {app}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

Slider.propTypes = {}

export default Slider;
