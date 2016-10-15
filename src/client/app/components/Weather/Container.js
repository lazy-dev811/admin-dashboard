import { connect } from 'react-redux';
import { fetchWeatherRequested } from '../../actions';

import Weather from './Weather.jsx';
import weatherHOC from './HOC.jsx';

const mapStateToProps = () => ({
  displayWeather: 'YES',
});

// const mapDispatchToProps = dispatch => ({
//   onPageLoad() {
//     console.log('sdsds');
//     dispatch(fetchWeatherRequested());
//   },
// });

const mergeProps = (stateProps, { dispatch }) => ({
  ...stateProps,
  onSubmit() {
    console.log('clicked');
    dispatch(fetchWeatherRequested());
  },
});

export default connect(mapStateToProps, null, mergeProps)(weatherHOC(Weather));
