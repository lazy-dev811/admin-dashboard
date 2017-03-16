import { connect } from 'react-redux';

import Home from '../Home.jsx';

const mapStateToProps = ({ widgetSlider, config }) => ({
  ...widgetSlider,
  ...config,
  config,
});

const mergeProps = ({ activeWidgets }, { dispatch }) => {

  return ({
    activeWidgets,
  });
};

export default connect(mapStateToProps, null, mergeProps)(Home);
