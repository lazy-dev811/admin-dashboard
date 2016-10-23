import React, { PropTypes } from 'react';

import reduxForm from './parts/Form.jsx';

require('./Settings.scss');

const Settings = ({ settings, onUpdate }) => (
  <div className="pg-settings">
    <reduxForm.form settings={settings} onUpdate={onUpdate} />
  </div>
);

Settings.propTypes = {
  settings: PropTypes.array,
  onUpdate: PropTypes.func.isRequired,
};

export default Settings;
