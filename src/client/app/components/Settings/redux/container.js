import { connect } from 'react-redux';
import { updateSettings } from './actions';

import Settings from '../Settings.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetSettings }) => ({ ...widgetSettings });

const mergeProps = ({ data, config }, { dispatch }) => ({
  data,
  config,
  onUpdate(settingToUpdate) {
    dispatch(updateSettings(settingToUpdate));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Settings));
