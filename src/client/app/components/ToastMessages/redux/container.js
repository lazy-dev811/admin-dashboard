import { connect } from 'react-redux';
import { some } from 'lodash';
import { addToast, burnToast } from './actions';

import ToastMessages from '../ToastMessages.jsx';

const mapStateToProps = (state) => {
  const newToasts = Object
    .keys(state)
    .filter(widget => state[widget].asyncStatus && state[widget].asyncStatus.error)
    .map(widget => ({
      widgetName: state[widget].widgetName,
      widgetErrorMessage: state[widget].asyncStatus.errorMessage,
    }));

  return ({ newToasts, ...state.widgetToastMessages, ...state.config });
};

const mergeProps = ({ toasts, newToasts, widgetToastMessages }, { dispatch }) => ({
  toasts,
  config: widgetToastMessages,
  onClick(toastIndex) {
    dispatch(burnToast(toastIndex));
  },
  checkForToasts() {
    newToasts.map(newToast => (
      !some(toasts, newToast) && dispatch(addToast(newToast))
    ));
  },
});

export default connect(mapStateToProps, null, mergeProps)(ToastMessages);
