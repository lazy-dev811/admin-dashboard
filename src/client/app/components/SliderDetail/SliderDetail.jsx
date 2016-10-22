import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Navigation from './parts/Navigation.jsx';
import Stats from './parts/Stats.jsx';
import reduxForm from './parts/Chart.jsx';

require('./SliderDetail.scss');

const SliderDetail = ({ data: { selectedPerson, activeState } }) => {
  const sliderDetailClass = classnames('slider-detail', { 'is-active': activeState });

  return (
    <div className={sliderDetailClass}>
      {/* ng-className="{ 'is-active': selectedPerson, 'is-test': options.model.transparentScrollbars.value }"> */}

      <div className="slider-detail__img-wrap">
        <div className="slider-detail__img-wrap__overlay">
          <div className="slider-detail__img-wrap__overlay__icon">
            {/* data-title="change picture"> */}
          </div>
        </div>
        <img className="slider-detail__img-wrap__img" alt="something" />
      </div>

      <Navigation />

      <div className="slider-detail__wrap scroll-wrap">
        <div className="scroll">

          <header className="slider-detail__header cf">
            Name: {selectedPerson.name}

            <ul className="slider-detail__header__states">
              <li className="slider-detail__header__state">
                {/* ng-className="{ 'is-active': 'closed' === activeState  }"
                       ng-click="setState('closed')"> */}
                <i className="icon icon-cancel-1 slider-detail__header__state__icon" />
              </li>
              <li className="slider-detail__header__state">
                {/* ng-className="{ 'is-active': 'docked' === activeState  }"
                       ng-click="setState('docked')"> */}
                <i className="icon icon-resize-full slider-detail__header__state__icon" />
              </li>
              <li className="slider-detail__header__state">
                {/* ng-className="{ 'is-active': 'fullScreen' === activeState  }"
                       ng-click="setState('fullScreen')"> */}
                <i className="icon icon-resize-full-alt slider-detail__header__state__icon" />
              </li>
            </ul>
          </header>

          <ul className="slider-detail__categories  cf">
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
          </ul>

          <reduxForm.form />

          <Stats selectedPerson={selectedPerson} />

          <div className="field-container cf">
            <input className="range" type="range" name="name" /> {/* ng-model="rangeModel"
       ng-value="rangeModel"> */}

            <input className="field field--range" type="text" name="name" /> {/* ng-model="rangeModel"
       ng-value="rangeModel"> */}
          </div>

          <p className="slider-detail__section">
            {selectedPerson.about}
          </p>

          <div className="field-container">
            <input className="field lw-full" type="text" name="name" placeholder="placeholder input" />
          </div>

          <div className="field-container">
            <textarea className="field lw-full" name="name" rows="5" placeholder="placeholder input" />
          </div>

          <div className="field-container">
            <div className="field field--dd-toggle">
              {/* ng-click="showDropdown = !showDropdown"
       ng-className="{ 'is-active': showDropdown }"> */}
              <i className="icon isAbs icon-down-open field__icon" />
              Active text
            </div>

            <ul className="field__list">
              <li className="field__list__item">
                tets
              </li>
              <li className="field__list__item">
                tets
              </li>
            </ul>
          </div>

          <div className="slider-detail__placeholder" />
        </div>
      </div>
    </div>
  );
};

SliderDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SliderDetail;
