import { connect } from 'react-redux';

import { slideItemSelect } from './actions';
import widgetHOC from '../../Widget/Widget.jsx';
import Slider from '../Slider.jsx';

const mapStateToProps = ({ widgetSlider, config }) => ({
  ...widgetSlider,
  ...config,
  config,
});

const mergeProps = ({ sliderItems, activeWidgets, widgetSlider, config }, { dispatch }) => {
  const widgetNames = Object
    .keys(config)
    .filter(widget => config[widget].type === 'widget')
    .map(index => config[index].name);

  return ({
    sliderItems: widgetNames,
    activeWidgets,
    slideItemSelect: widgetName => dispatch(slideItemSelect(widgetName)),
    config: widgetSlider,
  });
};

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Slider));
