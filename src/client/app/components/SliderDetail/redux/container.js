import { connect } from 'react-redux';

import SliderDetail from '../SliderDetail.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetSliderDetail }) => ({ ...widgetSliderDetail });

const mergeProps = ({ data, config }) => ({
  data,
  config,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(SliderDetail));
