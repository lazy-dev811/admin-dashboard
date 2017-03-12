import { connect } from 'react-redux';

import { slideItemSelect } from './actions';
import widgetHOC from '../../Widget/Widget.jsx';
import Slider from '../Slider.jsx';

const mapStateToProps = ({ widgetSlider, config }) => ({ ...widgetSlider, ...config });

const mergeProps = ({ widgetName, sliderItems, widgetSlider }, { dispatch }) => ({
  sliderItems,
  slideItemSelect: slide => dispatch(slideItemSelect(slide)),
  config: widgetSlider,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Slider));
