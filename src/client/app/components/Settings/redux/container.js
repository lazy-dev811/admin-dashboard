import { connect } from 'react-redux';
import { updateSettings } from './actions';

import Settings from '../Settings.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetSettings, config }) => ({ ...widgetSettings, ...config });

const mergeProps = ({ settings, widgetSettings }, { dispatch }) => ({
  settings,
  config: widgetSettings,
  onChangeTest(formValues) {
    dispatch(updateSettings(formValues));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Settings));
