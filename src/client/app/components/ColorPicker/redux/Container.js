import { connect } from 'react-redux';
import { colorPickerSelectColor } from './actions';

import ColorPicker from '../ColorPicker.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetColorPicker }) => ({
  ...widgetColorPicker,
});

const mergeProps = ({ data, config }, { dispatch }) => ({
  data,
  config,
  selectColor(selectedColorName) {
    dispatch(colorPickerSelectColor(selectedColorName));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(ColorPicker));
