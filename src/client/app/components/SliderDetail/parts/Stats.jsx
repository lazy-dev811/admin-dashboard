import React, { PropTypes } from 'react';

const Stats = ({ selectedPerson }) => (
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
          <input
            className="radio" //  ng-click="setGender()"
            //  ng-model="company.selected"
            type="radio"
            id="gender-m"
            name="radio"
          />

          <label htmlFor="gender-m">
            {/* ng-click="setGender()"> */}
          </label>
        </div>

        <label className="label" htmlFor="gender-f">
          female
        </label>
        <div className="input-container">
          <input
            className="radio" //  ng-click="setGender()"
            //  ng-model="company.selected"
            type="radio"
            id="gender-f"
            name="radio"
          />

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
          <input
            className="checkbox" //  ng-click=""
            //  ng-model="model"
            type="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox">
            {/* ng-click=""> */}
          </label>
        </div>
      </div>
    </li>
  </ul>
);

Stats.propTypes = {
  selectedPerson: PropTypes.object,
};

export default Stats;
