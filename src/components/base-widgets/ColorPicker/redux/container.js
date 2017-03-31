import { connect } from 'react-redux';
import { colorPickerSelectColor } from './actions';

import ColorPicker from '../ColorPicker.jsx';

const mapStateToProps = ({ widgetColorPicker, config }) => ({ ...widgetColorPicker, ...config });

const mergeProps = ({ widgetIdentifier, colors, activeColorName }, { dispatch }) => ({
  colors,
  activeColorName,
  selectColor(selectedColorName) {
    dispatch(colorPickerSelectColor(selectedColorName));
  },
});

export default connect(mapStateToProps, null, mergeProps)(ColorPicker);
