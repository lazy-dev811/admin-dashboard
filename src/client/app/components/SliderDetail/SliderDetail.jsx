import React, { PropTypes } from 'react';

require('./SliderDetail.scss');

const SliderDetail = ({ activeState, selectedPerson, }) => {
  return (
    <div className="slider-detail {activeState} docked is-active is-test">
      {/* ng-className="{ 'is-active': selectedPerson, 'is-test': options.model.transparentScrollbars.value }"> */}

      <div className="slider-detail__img-wrap">
        <div className="slider-detail__img-wrap__overlay">
          <div className="slider-detail__img-wrap__overlay__icon">
            {/* data-title="change picture"> */}
          </div>
        </div>
        <img className="slider-detail__img-wrap__img" />
          {/* ng-src="{selectedPerson.picture}"
             alt=""> */}
      </div>

      <nav className="slider-detail__nav">
        <ul className="slider-detail__nav__list">
          <li className="slider-detail__nav__list__item">
            Financials
          </li>
          <li className="slider-detail__nav__list__item">
            Relationships
          </li>
          <li className="slider-detail__nav__list__item">
            Graphs
          </li>
        </ul>
      </nav>

      <div className="slider-detail__wrap">
        <div className="test">

          <header className="slider-detail__header cf">
            Name: {selectedPerson.name}
            {selectedPerson.name}

            <ul className="slider-detail__header__states">
              <li className="slider-detail__header__state">
                {/* ng-className="{ 'is-active': 'closed' === activeState  }"
                       ng-click="setState('closed')"> */}
                <i className="icon icon-cancel-1 slider-detail__header__state__icon"></i>
              </li>
              <li className="slider-detail__header__state">
                {/* ng-className="{ 'is-active': 'docked' === activeState  }"
                       ng-click="setState('docked')"> */}
                <i className="icon icon-resize-full slider-detail__header__state__icon"></i>
              </li>
              <li className="slider-detail__header__state">
                {/* ng-className="{ 'is-active': 'fullScreen' === activeState  }"
                       ng-click="setState('fullScreen')"> */}
                <i className="icon icon-resize-full-alt slider-detail__header__state__icon"></i>
              </li>
            </ul>
          </header>

          <ul className="slider-detail__categories  cf">
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
            <li className="slider-detail__categories__item">
              {/* data-title="test title"> */}
            </li>
          </ul>

          <span ng-click="generateRandomData()">
            Generate Random
          </span>

          <div className="field-container">
            <input className="field lw-full" type="text" name="name" placeholder="Labels" />
            {/* ng-model="inputData.labels.raw"> */}
          </div>

          {/* <!-- {inputData.labels.raw} --> */}

          <div className="btn">
            {/* ng-click="updateInputData('labels')"> */}
            Labels
          </div>

          <div className="field-container">
            <input className="field lw-full" type="text" name="name" placeholder="Main data" />
            {/* ng-model="inputData.main.raw"> */}
          </div>

            {/* <!-- {inputData.main.raw} --> */}

          <div className="btn">
            {/* ng-click="updateInputData('main')"> */}
            Main data
          </div>

          <div className="field-container">
            <input className="field lw-full" type="text" name="name" placeholder="Compare data" />
            {/* ng-model="inputData.compare.raw"> */}
          </div>

          <div className="btn">
            {/* ng-click="updateInputData('compare')"> */}
            Compare data
          </div>

          {/* <chart-line
         chart-labels="inputData.labels.final"
         chart-data="inputData.main.final || selectedPerson.balances.actualBalance"
         chart-compare-data="inputData.compare.final || selectedPerson.balances.desiredBalance"
         chart-colors="chartColors">
        </chart-line> */}

          <ul className="slider-detail__stats cf">
            <li className="slider-detail__stats__item">
              Name:
              <div className="slider-detail__stats__item__value">
                {selectedPerson.name}
                {selectedPerson.name}
              </div>
            </li>
            <li className="slider-detail__stats__item">
              Gender:
              <div className="slider-detail__stats__item__value">
                <label className="label" htmlFor="gender-m">
                  male
                </label>
                <div className="input-container">
                  <input className="radio" //  ng-click="setGender()"
                    //  ng-model="company.selected"
                    type="radio" id="gender-m" name="radio" />

                  <label htmlFor="gender-m">
                    {/* ng-click="setGender()"> */}
                  </label>
                </div>

                <label className="label" htmlFor="gender-f">
                  female
                </label>
                <div className="input-container">
                  <input className="radio" //  ng-click="setGender()"
                    //  ng-model="company.selected"
                    type="radio" id="gender-f" name="radio" />

                  <label htmlFor="gender-f">
                    {/* ng-click="setGender()"> */}
                  </label>
                </div>
              </div>
            </li>

            <li className="slider-detail__stats__item">
              Company:
              <div className="slider-detail__stats__item__value">
                {selectedPerson.company}
              </div>
            </li>
            <li className="slider-detail__stats__item">
              Balance:
              <div className="slider-detail__stats__item__value">
                {selectedPerson.balance}
              </div>
            </li>
            <li className="slider-detail__stats__item">
              Age:
              <div className="slider-detail__stats__item__value">
                {selectedPerson.age}
              </div>
            </li>
            <li className="slider-detail__stats__item">
              Last:
              <div className="slider-detail__stats__item__value">
                <label className="label" htmlFor="checkbox">
                  Checkbox
                </label>
                <div className="input-container">
                  <input className="checkbox" //  ng-click=""
                    //  ng-model="model"
                    checked type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">
                    {/* ng-click=""> */}
                  </label>
                </div>
              </div>
            </li>
          </ul>

          <div className="field-container cf">
            <input className="range" type="range" name="name"/> {/* ng-model="rangeModel"
       ng-value="rangeModel"> */}

            <input className="field field--range" type="text" name="name"/> {/* ng-model="rangeModel"
       ng-value="rangeModel"> */}
          </div>

          <p className="slider-detail__section">
            {selectedPerson.about}
          </p>

          <div className="field-container">
            <input className="field lw-full" type="text" name="name" placeholder="placeholder input"/>
          </div>

          <div className="field-container">
            <textarea className="field lw-full" name="name" rows="5" placeholder="placeholder input"></textarea>
          </div>

          <div className="field-container">
            <div className="field field--dd-toggle">
              {/* ng-click="showDropdown = !showDropdown"
       ng-className="{ 'is-active': showDropdown }"> */}
              <i className="icon isAbs icon-down-open field__icon"></i>
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

          <div className="slider-detail__placeholder"></div>
        </div>
      </div>
    </div>
  );
};

SliderDetail.propTyes = {};

export default SliderDetail;
