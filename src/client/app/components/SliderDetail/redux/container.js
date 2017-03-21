import { connect } from 'react-redux';

import SliderDetail from '../SliderDetail.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetSliderDetail, config }) => ({ ...widgetSliderDetail, ...config });

const mergeProps = ({ widgetIdentifier, data, widgetSliderDetail }) => ({
  widgetIdentifier,
  data,
  config: widgetSliderDetail,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(SliderDetail));
