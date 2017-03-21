import { connect } from 'react-redux';
import { colorPickerSelectColor } from './actions';

import ColorPicker from '../ColorPicker.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetColorPicker, config }) => ({ ...widgetColorPicker, ...config });

const mergeProps = ({ widgetIdentifier, colors, activeColorName, widgetColorPicker }, { dispatch }) => ({
  colors,
  activeColorName,
  config: widgetColorPicker,
  selectColor(selectedColorName) {
    dispatch(colorPickerSelectColor(selectedColorName));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(ColorPicker));
