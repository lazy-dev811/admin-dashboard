import { connect } from 'react-redux';
import { burnToast } from './actions';

import ToastMessages from '../ToastMessages.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetToastMessages, config }) => ({ ...widgetToastMessages, ...config });

const mergeProps = ({ toasts, widgetToastMessages }, { dispatch }) => ({
  toasts,
  config: widgetToastMessages,
  onClick(toastIndex) {
    dispatch(burnToast(toastIndex));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(ToastMessages));
