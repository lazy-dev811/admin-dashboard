import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../FormElements/FormField/FormField.jsx';
import Button from '../../Button/Button.jsx';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'enter a title yo';
  }
  if (!values.categories) {
    errors.categories = 'enter a categories yo';
  }
  if (!values.content) {
    errors.content = 'enter a content yo';
  }
  return errors;
};

const Chart = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <span>
      {/* ng-click="generateRandomData()"> */}
      Generate Random
    </span>

    <Field
      type="text"
      name="name"
      component={FormField}
      id="name"
      placeholder="labels 1"
    />

    {/* <!-- {inputData.labels.raw} --> */}

    <div className="btn">
      {/* ng-click="updateInputData('labels')"> */}
      Labels
    </div>

    <Field
      type="text"
      name="main-data"
      component={FormField}
      id="main-data"
      placeholder="labels"
    />

    {/* <!-- {inputData.main.raw} --> */}

    <div className="btn">
      {/* ng-click="updateInputData('main')"> */}
      Main data
    </div>

    <Field
      type="text"
      name="compare-data"
      component={FormField}
      id="compare-data"
      placeholder="labels"
    />

    <Button label="Compare data" />

    {/* <chart-line
    chart-labels="inputData.labels.final"
    chart-data="inputData.main.final || selectedPerson.balances.actualBalance"
    chart-compare-data="inputData.compare.final || selectedPerson.balances.desiredBalance"
    chart-colors="chartColors">
    </chart-line> */}
  </form>
);

Chart.propTypes = {
  handleSubmit: PropTypes.func,
};

export default {
  form: reduxForm({
    form: 'SliderDetailForm',
    validate,
  })(Chart),
};
