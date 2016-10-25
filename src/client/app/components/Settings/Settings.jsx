import React, { PropTypes } from 'react';

import reduxForm from './parts/Form.jsx';

require('./Settings.scss');

const Settings = ({ settings, onChangeTest }) => (
  <div className="pg-settings">
    <reduxForm.form settings={settings} onChangeTest={onChangeTest} />
  </div>
);

Settings.propTypes = {
  settings: PropTypes.array,
  // onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

export default Settings;
