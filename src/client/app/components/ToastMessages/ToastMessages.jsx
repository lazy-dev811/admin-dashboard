import React, { PropTypes } from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Close from '../Icon/Close.jsx';

require('./ToastMessages.scss');

const ToastMessages = ({ toasts, onClick }) => {
  const items = toasts.map((toast, index) => {
    const toastClass = classnames([`toasts__toast is-${toast.type}`], {
      toasted: toast.toasted,
    });

    return (
      <li
        className={toastClass}
        key={index}
        onClick={() => onClick(index)}
      >
        <div className="toasts__toast__marker">
          <Close />
        </div>
        <div className="toasts__toast__copy">
          {toast.message}
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
};

ToastMessages.propTypes = {
  toasts: PropTypes.array,
  onClick: PropTypes.func,
};

export default ToastMessages;
