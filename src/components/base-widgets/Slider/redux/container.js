import { connect } from 'react-redux';

import { slideItemSelect } from './actions';
import Slider from '../Slider.jsx';

const mapStateToProps = ({ widgetSlider, config }) => ({
  ...widgetSlider,
  config,
});

const mergeProps = ({ sliderItems, activeWidgets, config }, { dispatch }) => {
  const widgetNames = Object
    .keys(config)
    .filter(widget => config[widget].type === 'widget')
    .map(index => config[index].name);

  return ({
    sliderItems: widgetNames,
    activeWidgets,
    slideItemSelect: widgetName => dispatch(slideItemSelect(widgetName)),
  });
};

export default connect(mapStateToProps, null, mergeProps)(Slider);