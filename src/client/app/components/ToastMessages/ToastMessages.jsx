import React, { PropTypes } from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Close from '../Icon/Close.jsx';

require('./ToastMessages.scss');

class ToastMessages extends React.Component {
  componentDidMount() {
    this.props.checkForToasts();
  }
  componentDidUpdate() {
    this.props.checkForToasts();
  }
  render() {
    const items = this.props.toasts.filter(toast => !toast.burnt).map((toast, index) => {
      const toastClass = classnames('toasts__toast', {
        toasted: toast.toasted,
      });

      return (
        <li
          className={toastClass}
          key={index}
          onClick={() => this.props.onClick(index)}
        >
          <div className="toasts__toast__marker">
            <Close />
          </div>
          <div className="toasts__toast__copy">
            {toast.widgetName}: {toast.widgetErrorMessage}
          </div>
        </li>
      );
    });

    const transition = {
      transitionName: 'toasts__toast',
      transitionEnterTimeout: 600,
      transitionLeaveTimeout: 600,
    };

    return (
      <ul className="toasts">
        <ReactCSSTransitionGroup {...transition}>
          {items}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

ToastMessages.propTypes = {
  toasts: PropTypes.array,
  onClick: PropTypes.func,
  checkForToasts: PropTypes.func.isRequired,
};

export default ToastMessages;
