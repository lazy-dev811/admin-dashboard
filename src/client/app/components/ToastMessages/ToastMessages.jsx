import React, { PropTypes } from 'react';

require('./ToastMessages.scss');

const ToastMessages = ({ toasts }) => (
  <ul className="toasts">
    {toasts.map((toast, index) => {
      return (
        <li className="toasts__toast is-{{ toast.type }}" key={index}>
         {/* ng-repeat="toast in toasts"
         ng-className="{ 'toasted' : touchedToast }"
         ng-click="touchedToast = true"> */}
          <div className="toasts__toast__icon-wrap">
            <i className="icon icon-cancel"></i>
          </div>
          <div className="toasts__toast__copy">
            {toast.message}
          </div>
        </li>
      );
    })}
  </ul>
);

ToastMessages.propTypes = {};

export default ToastMessages;
