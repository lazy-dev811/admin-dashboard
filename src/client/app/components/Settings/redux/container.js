import { connect } from 'react-redux';
import { updateSettings } from './actions';

import Settings from '../Settings.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetSettings, config }) => ({ ...widgetSettings, ...config });

const mergeProps = ({ settings, widgetSettings, initialValues }, { dispatch }) => ({
  settings,
  config: widgetSettings,
  initialValues,
  handleChange(formValues) {
    console.log('CHANGE')
    dispatch(updateSettings(formValues));
  },
  handleSubmit(formValues) {
    console.log('SUBMIT')
    // dispatch(updateSettings(formValues));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Settings));
