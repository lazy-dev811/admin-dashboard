import React, { PropTypes } from 'react';

import settingsForm from './parts/Form.jsx';

require('./Settings.scss');

const Settings = ({ settings, initialValues, handleChange, handleSubmit }) => (
  <div className="pg-settings">
    <settingsForm.form settings={settings} initialValues={initialValues} handleChange={handleChange} handleSubmit={handleSubmit} />
  </div>
);

Settings.propTypes = {
  settings: PropTypes.array,
  initialValues: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
};

export default Settings;
