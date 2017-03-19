import { connect } from 'react-redux';

import SliderDetail from '../SliderDetail.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetSliderDetail, config }) => ({ ...widgetSliderDetail, ...config });

const mergeProps = ({ widgetName, data, widgetSliderDetail }) => ({
  widgetName,
  data,
  config: widgetSliderDetail,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(SliderDetail));
