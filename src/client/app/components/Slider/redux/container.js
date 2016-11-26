import { connect } from 'react-redux';

import widgetHOC from '../../Widget/Widget.jsx';
import Slider from '../Slider.jsx';

const mapStateToProps = ({ widgetSlider, config }) => ({ ...widgetSlider, ...config });

const mergeProps = ({ widgetName, sliderItems, widgetSlider }, { dispatch }) => ({
  sliderItems,
  config: widgetSlider,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Slider));
