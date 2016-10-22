import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../FormElements/FormField/FormField.jsx';
import FormFieldText from '../../FormElements/FormFieldText/FormFieldText.jsx';
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
      name="name"
      component={FormFieldText}
      id="name"
      placeholder="labels 1"
      type="text"
    />

    {/* <!-- {inputData.labels.raw} --> */}

    <div className="btn">
      {/* ng-click="updateInputData('labels')"> */}
      Labels
    </div>

    <Field
      name="main-data"
      component={FormFieldText}
      id="main-data"
      placeholder="labels"
      type="text"
    />

    {/* <!-- {inputData.main.raw} --> */}

    <div className="btn">
      {/* ng-click="updateInputData('main')"> */}
      Main data
    </div>

    <Field
      name="compare-data"
      component={FormFieldText}
      id="compare-data"
      placeholder="labels"
      type="text"
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
